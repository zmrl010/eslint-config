/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce stateless components to be written as a pure function
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/prefer-stateless-function.md
 *
 * @minItems 1
 */
export type PreferStatelessFunction =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignorePureComponents?: boolean;
      }
    ];
