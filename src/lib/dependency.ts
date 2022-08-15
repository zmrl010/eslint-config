import readPackageUp, {
  type Options,
  type NormalizedPackageJson,
} from 'read-pkg-up';

export type Dependencies = Pick<
  NormalizedPackageJson,
  'peerDependencies' | 'devDependencies' | 'dependencies'
>;

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
  return new Map(
    Object.entries({
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
function readDependencies(opts: Options = {}): Dependencies {
  try {
    return readPackageUp.sync(opts)?.packageJson ?? {};
  } catch {
    return {};
  }
}

function createDependencyRegistry(deps: Dependencies) {
  const dependencyMap = createDependencyVersionMap(deps);

  return {
    /**
     * @returns true when dependency listed in package.json
     */
    hasDependency: dependencyMap.has.bind(dependencyMap),
    /**
     * @returns version of dependency if it is listed
     */
    getVersion: dependencyMap.get.bind(dependencyMap),
  };
}

export const { hasDependency, getVersion } = createDependencyRegistry(
  readDependencies()
);
