
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type FuncCallSpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always']
  | [
      'off' | 'error' | 'warn',
      'always',
      {
        allowNewlines?: boolean;
      }
    ];

export type FuncCallSpacing = 'off' | FuncCallSpacing0;
