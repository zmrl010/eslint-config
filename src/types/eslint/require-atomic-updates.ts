/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type RequireAtomicUpdates0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowProperties?: boolean;
      }
    ];

/**
 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
 * @see https://eslint.org/docs/rules/require-atomic-updates
 */
export type RequireAtomicUpdates = 'off' | RequireAtomicUpdates0;
