
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type QuoteProps0 =
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
    ];

export type QuoteProps = 'off' | QuoteProps0;
