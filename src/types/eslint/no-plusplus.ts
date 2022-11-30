/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the unary operators `++` and `--`
 * @see https://eslint.org/docs/rules/no-plusplus
 *
 * @minItems 1
 */
export type NoPlusplus =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowForLoopAfterthoughts?: boolean;
      }
    ];
