#!/usr/bin/env node
const { extractClassNames, getApiClientSmaliData, parseFileForApi } = require("../lib/analyze");

(async () => {
  const smalis = await getApiClientSmaliData();
  const functions = smalis.map((v) => parseFileForApi(v)).reduce((r, v) => r.concat(v), []);
  console.log(JSON.stringify(functions.map((v) => {
    v.methods.map((v) => {
      v.classNames = extractClassNames(v.segment);
      return v;
    });
    return v;
  }), null, 2));
})().catch((err) => console.error(err));
