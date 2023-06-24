"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCLI = exports.automatch = exports.scrapeProfiles = exports.loadFiles = exports.loadSessionFrom = exports.saveSessionAs = exports.callAPI = exports.loadProxy = exports.unsetProxy = exports.setProxy = exports.loadSession = exports.initSession = exports.parseSnapchat = exports.parseInstagram = exports.parseProfile = exports.saveSession = void 0;
const tinder_1 = require("./tinder");
const change_case_1 = require("change-case");
const fs_extra_1 = __importDefault(require("fs-extra"));
const url_1 = __importDefault(require("url"));
require("setimmediate");
const mkdirp_1 = __importDefault(require("mkdirp"));
const path_1 = __importDefault(require("path"));
const logger_1 = require("./logger");
const yargs = require("yargs");
const logger = (0, logger_1.getLogger)();
async function saveSession(tinder, json = false, filename = 'session.json') {
    await (0, mkdirp_1.default)(path_1.default.join(process.env.HOME, '.tinder'));
    await fs_extra_1.default.writeFile(path_1.default.join(process.env.HOME, '.tinder', filename), tinder.toJSON());
    if (!json)
        logger.info('saved to ~/' + path_1.default.join('.tinder', filename));
}
exports.saveSession = saveSession;
const parseProfile = (regex, urlPrefix, bio) => {
    const found = bio
        .trim()
        .split(/[\s\n:]/)
        .map((v) => v.trim())
        .filter((v) => !["-", ":"].includes(v))
        .filter(Boolean)
        .find((v, i, ary) => v[0] === "@" || (i > 0 && ary[i - 1].match(regex)));
    if (!found)
        return null;
    const replaced = found.replace("@", "");
    const isValid = replaced.match(/^[\._\w]+$/);
    if (!isValid || replaced.length < 5)
        return null;
    return urlPrefix + replaced;
};
exports.parseProfile = parseProfile;
exports.parseInstagram = exports.parseProfile.bind(null, /(?:^ig$|^insta|📷)/i, "https://instagram.com/");
exports.parseSnapchat = exports.parseProfile.bind(null, /(?:^sc$|^snap|👻)/i, "https://www.snapchat.com/add/");
async function initSession() {
    const proxyOptions = await loadProxy();
    const tinder = new tinder_1.TinderClient({ proxyOptions });
    logger.info('device details:');
    logger.info(Buffer.from(tinder.encodedDeviceModel, 'base64').toString('utf8'));
    logger.info('getting session');
    logger.info(await tinder.healthCheckAuth());
    logger.info('got JWT!');
    logger.info(tinder.persistentDeviceId);
    await saveSession(tinder);
}
exports.initSession = initSession;
async function loadSession() {
    const proxyOptions = await loadProxy();
    const tinder = tinder_1.TinderClient.fromJSON(await fs_extra_1.default.readFile(path_1.default.join(process.env.HOME, '.tinder', 'session.json')));
    tinder.proxyOptions = proxyOptions;
    console.log(tinder);
    return tinder;
}
exports.loadSession = loadSession;
const proxyStringToObject = (proxyUri) => {
    const parsed = url_1.default.parse(proxyUri);
    const [username, ...passwordParts] = (parsed.auth || '').split(':');
    return {
        hostname: parsed.hostname,
        port: parsed.port,
        userId: username || null,
        password: passwordParts.join(':') || null
    };
};
const objectToProxyString = (o) => {
    return 'socks5h://' + (o.userId ? o.userId + ':' + o.password + '@' : '') + o.hostname + (o.port ? ':' + o.port : '');
};
async function setProxy(proxyUri) {
    await (0, mkdirp_1.default)(path_1.default.join(process.env.HOME, '.tinder'));
    const proxyOptions = proxyStringToObject(proxyUri);
    const joined = objectToProxyString(proxyOptions);
    await fs_extra_1.default.writeFile(path_1.default.join(process.env.HOME, '.tinder', 'proxy'), joined);
    logger.info('set-proxy: ' + joined);
}
exports.setProxy = setProxy;
async function unsetProxy() {
    await (0, mkdirp_1.default)(path_1.default.join(process.env.HOME, '.tinder'));
    await fs_extra_1.default.unlink(path_1.default.join(process.env.HOME, '.tinder', 'proxy'));
    logger.info('unset-proxy');
}
exports.unsetProxy = unsetProxy;
async function loadProxy() {
    await (0, mkdirp_1.default)(path_1.default.join(process.env.HOME, '.tinder'));
    try {
        return proxyStringToObject(await fs_extra_1.default.readFile(path_1.default.join(process.env.HOME, '.tinder', 'proxy'), 'utf8'));
    }
    catch (e) {
        return null;
    }
}
exports.loadProxy = loadProxy;
async function callAPI(command, data) {
    const tinder = await loadSession();
    const camelCommand = (0, change_case_1.camelCase)(command);
    const json = data.j || data.json;
    delete data.j;
    delete data.json;
    if (!tinder[camelCommand])
        throw Error('command not foud: ' + command);
    const result = await tinder[camelCommand](data);
    if (json)
        console.log(JSON.stringify(result, null, 2));
    else
        logger.info(result);
    await saveSession(tinder, json);
    return result;
}
exports.callAPI = callAPI;
async function saveSessionAs(name) {
    const tinder = await loadSession();
    await saveSession(tinder, false, name + '.json');
}
exports.saveSessionAs = saveSessionAs;
async function loadSessionFrom(name) {
    const tinder = tinder_1.TinderClient.fromObject(require(path_1.default.join(process.env.HOME, '.tinder', name)));
    await saveSession(tinder);
}
exports.loadSessionFrom = loadSessionFrom;
async function loadFiles(data) {
    const fields = [];
    for (let [k, v] of Object.entries(data)) {
        const parts = /(^.*)FromFile$/.exec(k);
        if (parts) {
            const key = parts[1];
            fields.push([key, await fs_extra_1.default.readFile(v)]);
        }
        else {
            fields.push([k, v]);
        }
    }
    return fields.reduce((r, [k, v]) => {
        r[k] = v;
        return r;
    }, {});
}
exports.loadFiles = loadFiles;
async function scrapeProfiles(destination) {
    await (0, mkdirp_1.default)(destination);
    process.chdir(destination);
    const tinder = await loadSession();
    const files = await fs_extra_1.default.readdir(process.cwd());
    let i = Math.max(...files.map((v) => Number((v.match(/\d+/) || [0])[0])));
    for (;; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500 + Math.floor(Math.random() * 1000)));
        const response = await tinder.recsCore({});
        console.log(require('util').inspect(response, { depth: 15, colors: true }));
        if (response.data.timeout) {
            await new Promise((resolve) => setTimeout(resolve, 10000));
            i--;
            continue;
        }
        for (const result of (response.data.results || [])) {
            const ig = (0, exports.parseInstagram)(result.user.bio);
            if (ig) {
                await fs_extra_1.default.writeFile(result.user._id + '<IG>' + '.json', JSON.stringify(result, null, 2));
            }
            await fs_extra_1.default.writeFile(result.user._id + '.json', JSON.stringify(result, null, 2));
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
            await new Promise((resolve) => setTimeout(resolve, 500 + Math.floor(Math.random() * 1000)));
        }
    }
}
exports.scrapeProfiles = scrapeProfiles;
async function automatch() {
    const tinder = await loadSession();
    let i = 0;
    for (;; i++) {
        await new Promise((resolve) => setTimeout(resolve, 500 + Math.floor(Math.random() * 1000)));
        const response = await tinder.recsCore({});
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
            await new Promise((resolve) => setTimeout(resolve, 500 + Math.floor(Math.random() * 1000)));
        }
    }
}
exports.automatch = automatch;
async function runCLI() {
    const [command] = yargs.argv._;
    const options = Object.assign({}, yargs.argv);
    delete options._;
    const data = await loadFiles(Object.entries(options).reduce((r, [k, v]) => {
        r[(0, change_case_1.camelCase)(k)] = String(v);
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
exports.runCLI = runCLI;
//# sourceMappingURL=cli.js.map