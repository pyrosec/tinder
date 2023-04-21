import { TinderClient } from "./tinder";
import { camelCase } from "change-case";
import fs from "fs-extra";
import util from "util";
import url from "url";
import "setimmediate";
import mkdirp from "mkdirp"
import path from "path";
import { getLogger } from "./logger";
const yargs = require("yargs");

const logger = getLogger();

export async function saveSession(tinder, json = false, filename = 'session.json') {
  await mkdirp(path.join(process.env.HOME, '.tinder'));

  await fs.writeFile(path.join(process.env.HOME, '.tinder', filename), tinder.toJSON());
  if (!json) logger.info('saved to ~/' + path.join('.tinder', filename));
}
  

export async function initSession() {
  const proxyOptions = await loadProxy();
  const tinder = new TinderClient({ proxyOptions });
  logger.info('device details:');
  logger.info(Buffer.from(tinder.encodedDeviceModel, 'base64').toString('utf8'))
  logger.info('getting session');
  logger.info(await tinder.healthCheckAuth());
  logger.info('got JWT!');

  logger.info(tinder.persistentDeviceId);
  await saveSession(tinder);
}

export async function loadSession() {
  const proxyOptions = await loadProxy();
  const tinder = TinderClient.fromJSON(await fs.readFile(path.join(process.env.HOME, '.tinder', 'session.json')));
  tinder.proxyOptions = proxyOptions;
  console.log(tinder)
  return tinder;
}

const proxyStringToObject = (proxyUri: string) => {
  const parsed = url.parse(proxyUri);
  const [ username, ...passwordParts ] = (parsed.auth || '').split(':')
  return {
    hostname: parsed.hostname,
    port: parsed.port,
    userId: username || null,
    password: passwordParts.join(':') || null
  };
};

const objectToProxyString = (o: any) => {
  return 'socks5h://' + (o.userId ? o.userId + ':' + o.password + '@' : '') + o.hostname + (o.port ? ':' + o.port : '');
};


export async function setProxy(proxyUri: string) {
  await mkdirp(path.join(process.env.HOME, '.tinder'));
  const proxyOptions = proxyStringToObject(proxyUri);
  const joined = objectToProxyString(proxyOptions);
  await fs.writeFile(path.join(process.env.HOME, '.tinder', 'proxy'), joined);
  logger.info('set-proxy: ' + joined);
}

export async function unsetProxy() {
  await mkdirp(path.join(process.env.HOME, '.tinder'));
  await fs.unlink(path.join(process.env.HOME, '.tinder', 'proxy'));
  logger.info('unset-proxy');
}

export async function loadProxy() {
  await mkdirp(path.join(process.env.HOME, '.tinder'));
  try {
    return proxyStringToObject(await fs.readFile(path.join(process.env.HOME, '.tinder', 'proxy'), 'utf8'));
  } catch (e) {
    return null;
  }
}


export async function callAPI(command, data) {
  const tinder = await loadSession();
  const camelCommand = camelCase(command);
  const json = data.j || data.json;
  delete data.j
  delete data.json;
  if (!tinder[camelCommand]) throw Error('command not foud: ' + command);
  const result = await tinder[camelCommand](data);
  if (json) console.log(JSON.stringify(result, null, 2));
  else logger.info(result);
  await saveSession(tinder, json);
  return result;
}

export async function saveSessionAs(name) {
  const tinder = await loadSession();
  await saveSession(tinder, false, name + '.json');
}

export async function loadSessionFrom(name) {
  const tinder = TinderClient.fromObject(require(path.join(process.env.HOME, '.tinder', name)));
  await saveSession(tinder);
}
  

export async function loadFiles(data: any) {
  const fields = [];
  for (let [ k, v ] of Object.entries(data)) {
    const parts = /(^.*)FromFile$/.exec(k);
    if (parts) {
      const key = parts[1];
      fields.push([key, await fs.readFile(v)]);
    } else {
      fields.push([k, v]);
    }
  }
  return fields.reduce((r, [k, v]) => {
    r[k] = v;
    return r;
  }, {});
}

export async function scrapeProfiles(destination: string) {
  await mkdirp(destination);
  process.chdir(destination);
  const tinder = await loadSession();
  const files = await fs.readdir(process.cwd());
  let i = Math.max(...files.map((v) => Number((v.match(/\d+/) || [0])[0])));
  for (;; i++) {
    await new Promise((resolve) => setTimeout(resolve, 500+Math.floor(Math.random()*1000)));
    const response: any = await tinder.recsCore({});
    console.log(require('util').inspect(response, { depth: 15, colors: true }));
    if (response.data.timeout) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      i--;
      continue;
    }
    for (const result of (response.data.results || [])) {
      await fs.writeFile(result.user._id + '.json', JSON.stringify(result, null, 2));
      const urls = result.user.photos.map((v) => v.url);
      let i = 0;
      /*
      for (const imgUrl of urls) {
        await fs.writeFile(path.join(process.cwd(), result.user._id + '-' + String(i) + '.jpg'), Buffer.from(await (await (await fetch(imgUrl, {
          method: 'GET'
	})).blob()).arrayBuffer()));
	i++;
      }
     */
      await tinder.passRecId({
        id: result.user._id,
	photoId: (result.user.photos[0] || {}).id,
	content_hash: result.content_hash,
	s_number: String(result.s_number)
      });
      await new Promise((resolve) => setTimeout(resolve, 500+Math.floor(Math.random()*1000)));
    }
  }
}

export async function automatch() {
  const tinder = await loadSession();
  let i = 0;
  for (;; i++) {
    await new Promise((resolve) => setTimeout(resolve, 500+Math.floor(Math.random()*1000)));
    const response: any = await tinder.recsCore({});
    console.log(require('util').inspect(response, { depth: 15, colors: true }));
    if (response.data.timeout) {
      await new Promise((resolve) => setTimeout(resolve, 10000));
      i--;
      continue;
    }
    for (const result of (response.data.results || [])) {
      await tinder.likeRecId({
        id: result.user._id,
	photoId: (result.user.photos[0] || {}).id,
	content_hash: result.content_hash,
	s_number: String(result.s_number)
      });
      await new Promise((resolve) => setTimeout(resolve, 500+Math.floor(Math.random()*1000)));
    }
  }
}

      

export async function runCLI() {
  const [ command ] = yargs.argv._;
  const options = Object.assign({}, yargs.argv);
  delete options._;
  const data = await loadFiles(Object.entries(options).reduce((r, [ k, v ]) => {
    r[camelCase(k)] = String(v);
    return r;
  }, {}));
  switch (command) {
    case 'init':
      return await initSession();
      break;
    case 'set-proxy':
      return await setProxy(yargs.argv._[1]);
      break;
    case 'unset-proxy':
      return await unsetProxy();
      break;
    case 'save':
      return await saveSessionAs(yargs.argv._[1]);
      break;
    case 'load':
      return await loadSessionFrom(yargs.argv._[1]);
      break;
    case 'scrape':
      return await scrapeProfiles(yargs.argv._[1]);
      break;
    case 'automatch':
      return await automatch();
      break;
    default: 
      return await callAPI(yargs.argv._[0], data);
      break;
  }
}
