#!/usr/bin/env node
const {
  findClass,
  extractClassNames,
  getApiClientSmaliData,
  parseFileForApi,
} = require("../lib/analyze");

const protobufImports = ['Timestamp', 'Duration', 'StringValue', 'DoubleValue', 'FloatValue', 'Int64Value', 'Int32Value', 'BytesValue', 'BoolValue'];

(async () => {
  console.log('syntax = "proto3";\n' + protobufImports.map((v) => 'import "google/protobuf/' + v + '.proto";').join('\n'));
  let classNames = [];
  const smalis = await getApiClientSmaliData();
  const functions = smalis
    .map((v) => parseFileForApi(v))
    .reduce((r, v) => r.concat(v), []);
  functions.map((v) => {
    v.methods.map((v) => {
      classNames = classNames.concat(
        (v.classNames = extractClassNames(v.segment))
      );
      return v;
    });
    return v;
  });
  for (const fn of functions) {
    for (const className of fn.methods.reduce(
      (r, v) =>
        r
          .concat([(v.classNames || {}).request, (v.classNames || {}).response])
          .filter(Boolean),
      []
    )) {
      try {
        await findClass(className);
      } catch (e) {}
    }
  }
})().catch((err) => console.error(err));
