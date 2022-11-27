
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type InitDeclarations = 'off' | InitDeclarations0;
