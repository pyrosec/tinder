#!/usr/bin/env node
const { logTypeScriptInterface, logTypeScriptMethod, lookupJsonFile, parseNestedJsonSchema, extractClassNames, getApiClientSmaliData, parseFileForApi } = require("../lib/analyze");
const fs = require('fs');
const path = require('path');

const proto = fs.readFileSync(path.join(__dirname, '..', 'src.ts', 'api.json'), 'utf8');

(async () => {
  const smalis = await getApiClientSmaliData();
  const functions = smalis.map((v) => parseFileForApi(v)).reduce((r, v) => r.concat(v), []);
  (functions.map((v) => {
    v.methods.map((v) => {
      v.classNames = extractClassNames(v.segment);
      return v;
    });
    return v;
  }));
  const apiMethods = functions.map((v) => v.methods).reduce((r, v) => r.concat(v), []).filter((v) => v.route);
  const types = apiMethods.map((v) => [ v.classNames.request, v.classNames.response ]).reduce((r, v) => r.concat(v), []).filter((v) => v && !proto.match(v));
  let schemas = [];
  for (const type of types) {
    schemas = schemas.concat(await parseNestedJsonSchema(await lookupJsonFile(type)));
  }
  schemas.forEach((v) => logTypeScriptInterface(v));
  for (const method of apiMethods) {
     await logTypeScriptMethod(method);
  }
})().catch((err) => console.error(err));
