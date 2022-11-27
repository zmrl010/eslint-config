/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoPlusplus0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowForLoopAfterthoughts?: boolean;
      }
    ];

/**
 * Disallow the unary operators `++` and `--`
 * @see https://eslint.org/docs/rules/no-plusplus
 */
export type NoPlusplus = 'off' | NoPlusplus0;
