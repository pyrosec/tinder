#!/usr/bin/env node
'use strict';

const { parseNestedJsonSchema } = require('../lib/analyze');
const yargs = require('yargs');
const fs = require('fs-extra');
const path = require('path');

(async () => {
  const contents = await fs.readFile(path.join(process.cwd(), yargs.argv._[0]), 'utf8');
  console.log(JSON.stringify(await parseNestedJsonSchema(contents), null, 2));
})().catch((err) => console.error(err));
