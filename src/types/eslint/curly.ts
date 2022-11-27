
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type Curly0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'all']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'multi' | 'multi-line' | 'multi-or-nest']
  | [
      'off' | 'error' | 'warn',
      'multi' | 'multi-line' | 'multi-or-nest',
      'consistent'
    ];

export type Curly = 'off' | Curly0;
