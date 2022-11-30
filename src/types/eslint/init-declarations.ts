/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow initialization in variable declarations
 * @see https://eslint.org/docs/rules/init-declarations
 */
export type InitDeclarations =
  | 'off'
  | (
      | ['off' | 'error' | 'warn', 'always']
      | ['off' | 'error' | 'warn', 'always', unknown]
      | ['off' | 'error' | 'warn', 'never']
      | [
          'off' | 'error' | 'warn',
          'never',
          {
            ignoreForLoopInit?: boolean;
          }
        ]
      | [
          'off' | 'error' | 'warn',
          'never',
          {
            ignoreForLoopInit?: boolean;
          },
          unknown
        ]
    );
