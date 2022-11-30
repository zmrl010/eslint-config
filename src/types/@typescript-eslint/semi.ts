/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require or disallow semicolons instead of ASI
 * @see https://typescript-eslint.io/rules/semi
 */
export type Semi =
  | 'off'
  | (
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
        ]
    );
