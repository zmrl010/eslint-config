/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type Curly =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'all']
      | ['off' | 'error' | 'warn']
      | ['off' | 'error' | 'warn', 'multi' | 'multi-line' | 'multi-or-nest']
      | [
          'off' | 'error' | 'warn',
          'multi' | 'multi-line' | 'multi-or-nest',
          'consistent'
        ]
    );
