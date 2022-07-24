import readPackageUp, { type NormalizedPackageJson } from 'read-pkg-up';

/**
 * Create a map object composed of dependencies
 * found in closest package.json file
 */
function createDependencyMap(
  pkg: Partial<NormalizedPackageJson>
): Map<string, string> {
  return new Map(
    Object.entries({
      ...pkg.peerDependencies,
      ...pkg.devDependencies,
      ...pkg.dependencies,
    })
  );
}

export const dependencyMap = (() => {
  try {
    const { packageJson = {} } = readPackageUp.sync() ?? {};
    return createDependencyMap(packageJson);
  } catch (err: unknown) {
    console.error(err);
    return new Map<string, string>();
  }
})();
