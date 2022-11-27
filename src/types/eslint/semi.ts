/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type Semi0 =
  | ['off' | 'error' | 'warn', 'never']
  | [
      'off' | 'error' | 'warn',
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      }
    ]
  | [
      'off' | 'error' | 'warn',
      'never',
      {
        beforeStatementContinuationChars?: 'always' | 'any' | 'never';
      },
      unknown
    ]
  | ['off' | 'error' | 'warn', 'always']
  | [
      'off' | 'error' | 'warn',
      'always',
      {
        omitLastInOneLineBlock?: boolean;
      }
    ]
  | [
      'off' | 'error' | 'warn',
      'always',
      {
        omitLastInOneLineBlock?: boolean;
      },
      unknown
    ];

/**
 * Require or disallow semicolons instead of ASI
 * @see https://eslint.org/docs/rules/semi
 */
export type Semi = 'off' | Semi0;
