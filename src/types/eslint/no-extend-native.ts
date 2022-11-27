/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoExtendNative0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: string[];
      }
    ];

/**
 * Disallow extending native types
 * @see https://eslint.org/docs/rules/no-extend-native
 */
export type NoExtendNative = 'off' | NoExtendNative0;
