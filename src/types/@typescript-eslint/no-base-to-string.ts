/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require `.toString()` to only be called on objects which provide useful information when stringified
 * @see https://typescript-eslint.io/rules/no-base-to-string
 *
 * @minItems 1
 */
export type NoBaseToString =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoredTypeNames?: string[];
      }
    ];
