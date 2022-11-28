#!/usr/bin/env ts-node

import { generateTypes } from '../lib/generateTypes.js';

function main() {
  generateTypes({
    target: process.argv[2],
  });
}

void main();
