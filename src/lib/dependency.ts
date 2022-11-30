import type { Dependencies } from './read-package.js';

/**
 * Get a dependency's version range from package dependency mappings
 * @param pkg package manifest data from `package.json`
 * @param depName dependency name as listed in `package.json`
 * @returns found version range as string or an empty string if none found
 */
export function getDependencyVersion(
  pkg: Dependencies,
  depName: string
): string {
  return (
    pkg.optionalDependencies?.[depName] ??
    pkg.dependencies?.[depName] ??
    pkg.devDependencies?.[depName] ??
    pkg.peerDependencies?.[depName] ??
    ''
  );
}

/**
 * Check if a dependency is listed in `package.json`
 * @param pkg package manifest data from `package.json`
 * @param depName dependency name as listed in `package.json`
 * @returns true if dependency is listed in any dependency fields
 */
export function isDependencyListed(
  pkg: Dependencies,
  depName: string
): boolean {
  return Boolean(getDependencyVersion(pkg, depName));
}
