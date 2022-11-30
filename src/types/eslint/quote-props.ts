/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type QuoteProps =
  | 'off'
  | (
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          'always' | 'as-needed' | 'consistent' | 'consistent-as-needed'
        ]
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          'always' | 'as-needed' | 'consistent' | 'consistent-as-needed'
        ]
      | [
          'off' | 'error' | 'warn',
          'always' | 'as-needed' | 'consistent' | 'consistent-as-needed',
          {
            keywords?: boolean;
            unnecessary?: boolean;
            numbers?: boolean;
          }
        ]
    );
