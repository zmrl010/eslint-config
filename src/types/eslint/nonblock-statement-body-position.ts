/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NonblockStatementBodyPosition =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'beside' | 'below' | 'any']
  | [
      'off' | 'error' | 'warn',
      'beside' | 'below' | 'any',
      {
        overrides?: {
          if?: 'beside' | 'below' | 'any';
          else?: 'beside' | 'below' | 'any';
          while?: 'beside' | 'below' | 'any';
          do?: 'beside' | 'below' | 'any';
          for?: 'beside' | 'below' | 'any';
        };
      }
    ];
