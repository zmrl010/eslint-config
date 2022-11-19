import { readPackageUpSync } from 'read-pkg-up';

export type Dependencies = {
  peerDependencies?: Record<string, string>;
  devDependencies?: Record<string, string>;
  dependencies?: Record<string, string>;
};

/**
 * Create a Map object that maps dependency names
 * as keys to their corresponding version as values.
 *
 * Fields (in reversed order of precedence):
 *
 * - peerDependencies
 * - devDependencies
 * - dependencies
 */
function createDependencyVersionMap(pkg: Dependencies): Map<string, string> {
  return new Map<string, string>(
    Object.entries<string>({
      ...pkg.peerDependencies,
      ...pkg.devDependencies,
      ...pkg.dependencies,
    })
  );
}

/**
 * read project dependencies
 *
 * *fails silently by returning empty object*
 */
function readDependencies(): Dependencies {
  const result = readPackageUpSync();
  if (!result) {
    return {};
  }
  return result.packageJson as Dependencies;
}

function createDependencyRegistry(deps: Dependencies) {
  const dependencyMap = createDependencyVersionMap(deps);

  return {
    /**
     * @returns true when dependency listed in package.json
     */
    hasDependency: (key: string) => dependencyMap.has(key),
    /**
     * @returns version of dependency as it is listed in package.json
     */
    getVersion: (key: string) => dependencyMap.get(key),
  };
}

export const { hasDependency, getVersion } = createDependencyRegistry(
  readDependencies()
);
