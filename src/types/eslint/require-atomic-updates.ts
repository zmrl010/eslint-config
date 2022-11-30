/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
 * @see https://eslint.org/docs/rules/require-atomic-updates
 *
 * @minItems 1
 */
export type RequireAtomicUpdates =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowProperties?: boolean;
      }
    ];
