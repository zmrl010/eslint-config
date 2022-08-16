import { type Range } from 'semver';
import semVerMinVersion from 'semver/ranges/min-version';
import validRange from 'semver/ranges/valid';

/**
 * @returns the lowest version that can possibly
 * match the given range.
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
