/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type ArrowBodyStyle =
  | 'off'
  | (
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
        ]
    );
