/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type FuncNames0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', Value]
  | [
      'off' | 'error' | 'warn',
      Value,
      {
        generators?: Value;
      }
    ];
type Value = 'always' | 'as-needed' | 'never';

/**
 * Require or disallow named `function` expressions
 * @see https://eslint.org/docs/rules/func-names
 */
export type FuncNames = 'off' | FuncNames0;
