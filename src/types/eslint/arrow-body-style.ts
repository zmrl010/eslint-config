
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type ArrowBodyStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'as-needed']
  | [
      'off' | 'error' | 'warn',
      'as-needed',
      {
        requireReturnForObjectLiteral?: boolean;
      }
    ];

export type ArrowBodyStyle = 'off' | ArrowBodyStyle0;
