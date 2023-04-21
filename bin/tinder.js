#!/usr/bin/env node

const  { runCLI } = require("../lib/cli");

(async () => {
  await runCLI();
})().catch((err) => console.error(err));

