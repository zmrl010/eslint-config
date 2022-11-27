/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type InitDeclarations0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never']
  | [
      'off' | 'error' | 'warn',
      'never',
      {
        ignoreForLoopInit?: boolean;
      }
    ];

/**
 * Require or disallow initialization in variable declarations
 * @see https://typescript-eslint.io/rules/init-declarations
 */
export type InitDeclarations = 'off' | InitDeclarations0;
