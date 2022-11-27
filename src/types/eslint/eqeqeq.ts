/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type Eqeqeq0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always']
  | [
      'off' | 'error' | 'warn',
      'always',
      {
        null?: 'always' | 'never' | 'ignore';
      }
    ]
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'smart' | 'allow-null'];

/**
 * Require the use of `===` and `!==`
 * @see https://eslint.org/docs/rules/eqeqeq
 */
export type Eqeqeq = 'off' | Eqeqeq0;
