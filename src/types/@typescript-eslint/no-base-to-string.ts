/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoBaseToString0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoredTypeNames?: string[];
      }
    ];

/**
 * Require `.toString()` to only be called on objects which provide useful information when stringified
 * @see https://typescript-eslint.io/rules/no-base-to-string
 */
export type NoBaseToString = 'off' | NoBaseToString0;
