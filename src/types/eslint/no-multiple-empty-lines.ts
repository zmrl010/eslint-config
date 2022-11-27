/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMultipleEmptyLines0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max: number;
        maxEOF?: number;
        maxBOF?: number;
      }
    ];

/**
 * Disallow multiple empty lines
 * @see https://eslint.org/docs/rules/no-multiple-empty-lines
 */
export type NoMultipleEmptyLines = 'off' | NoMultipleEmptyLines0;
