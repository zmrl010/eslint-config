/**
 * @fileoverview
 * utils for reading package data
 */
const fs = require('fs');
const path = require('path');
const readPackageUp = require('read-pkg-up');

/**
 * Create a map object composed of dependencies
 * found in closest package.json file
 *
 * @param {import('read-pkg-up').NormalizedPackageJson} pkg
 * @returns {Map<string, string>}
 */
function createDependencyMap(pkg) {
  return new Map(
    Object.entries({
      ...pkg.peerDependencies,
      ...pkg.devDependencies,
      ...pkg.dependencies,
    })
  );
}

/**
 * @type {Map<string, string>}
 */
const dependencyMap = (() => {
  try {
    const { packageJson } = readPackageUp.sync();
    return createDependencyMap(packageJson);
  } catch (err) {
    return new Map();
  }
})();

/**
 * Check if each path exists and return the first one resolved
 * @param  {...string} pathSegments
 * @returns {string | undefined}
 */
function resolveFirstExistingPath(...pathSegments) {
  for (const pathSeg of pathSegments) {
    if (fs.existsSync(pathSeg)) {
      return path.resolve(pathSeg);
    }
  }
  return undefined;
}

const tsConfig = resolveFirstExistingPath(
  'tsconfig.json',
  'types/tsconfig.json'
);

module.exports = {
  tsConfig,
  dependencyMap,
};
