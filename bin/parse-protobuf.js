#!/usr/bin/env node
"use strict";

const yargs = require("yargs");
const { parsedToMessage, findClass, parseProtobuf } = require("../lib/analyze");
const fs = require("fs-extra");

(async () => {
 await findClass(yargs.argv._[0].replace('.smali', ''));
/*  const file = await fs.readFile(yargs.argv._[0], "utf8");
$$console.log(await parsedToMessage(await parseProtobuf(file))); */

})().catch((err) => console.error(err));
