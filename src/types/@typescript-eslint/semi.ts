
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type Semi0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'never']
  | [
      'off' | 'error' | 'warn',
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      }
    ]
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always']
  | [
      'off' | 'error' | 'warn',
      'always',
      {
        omitLastInOneLineBlock?: boolean;
      }
    ];

export type Semi = 'off' | Semi0;
