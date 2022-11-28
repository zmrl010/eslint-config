/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type PreferSnapshotHint0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'multi'];

/**
 * Prefer including a hint with external snapshots
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-snapshot-hint.md
 */
export type PreferSnapshotHint = 'off' | PreferSnapshotHint0;
