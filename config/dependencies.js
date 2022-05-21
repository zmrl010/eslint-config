/**
 * @fileoverview
 * utils for reading package data
 */
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
    if (process.env.NODE_ENV !== 'production') {
      console.error(err);
    }
    return new Map();
  }
})();

module.exports = {
  dependencyMap,
};
