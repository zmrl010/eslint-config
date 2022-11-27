
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type InitDeclarations0 =
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
    ];

export type InitDeclarations = 'off' | InitDeclarations0;
