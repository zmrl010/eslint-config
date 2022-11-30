/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow multiple empty lines
 * @see https://eslint.org/docs/rules/no-multiple-empty-lines
 *
 * @minItems 1
 */
export type NoMultipleEmptyLines =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        max: number;
        maxEOF?: number;
        maxBOF?: number;
      }
    ];
