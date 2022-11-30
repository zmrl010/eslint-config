/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow large snapshots
 * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-large-snapshots.md
 *
 * @minItems 1
 */
export type NoLargeSnapshots =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        maxSize?: number;
        inlineMaxSize?: number;
        allowedSnapshots?: {
          [k: string]: unknown[] | undefined;
        };
      }
    ];
