const fs = require("fs");
const path = require("path");

/**
 * Check if each path exists and return the first one resolved
 * @param  {...string} pathSegments
 * @returns {string | undefined}
 */
const tryResolve = (...pathSegments) => {
  for (const pathSeg of pathSegments) {
    if (fs.existsSync(path)) {
      return path.resolve(pathSeg);
    }
  }
  return undefined;
};

const tsConfig = tryResolve("tsconfig.json", "types/tsconfig.json");

/** @type {import('eslint').Linter.Config} */
module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ["prettier", "./import.js"],
  rules: {
    "accessor-pairs": "error",
  },
  overrides: [
    {
      files: ["**/*.ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2018,
        project: tsConfig,
        sourceType: "module",
      },
      plugins: ["@typescript-eslint"],
      rules: {},
    },
  ],
};
