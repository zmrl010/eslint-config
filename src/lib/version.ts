import { minVersion as semVerMinVersion, validRange, type Range } from 'semver';

/**
 * @returns the lowest version that can possibly
 * match the given range or null if input.
 *
 * @see {semVerMinVersion}
 */
export function minVersion(versionRange?: string | Range | null | undefined) {
  const range = validRange(versionRange);
  if (!range) {
    return null;
  }
  return semVerMinVersion(range);
}
