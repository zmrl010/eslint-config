/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
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
