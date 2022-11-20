import {
  readPackageUpSync,
  type NormalizeOptions,
  type PackageJson,
} from 'read-pkg-up';

export type { NormalizeOptions, PackageJson };

export type DependencyFields =
  | 'optionalDependencies'
  | 'peerDependencies'
  | 'devDependencies'
  | 'dependencies';

export type Dependencies = Pick<PackageJson, DependencyFields>;

/**
 * read `package.json`
 *
 * *fails silently by returning empty object*
 */

export function readPackage(options?: NormalizeOptions): PackageJson {
  const result = readPackageUpSync(options);
  return result?.packageJson ?? {};
}
