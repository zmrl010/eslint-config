/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnusedVars0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | ('all' | 'local')
        | {
            vars?: 'all' | 'local';
            varsIgnorePattern?: string;
            args?: 'all' | 'after-used' | 'none';
            ignoreRestSiblings?: boolean;
            argsIgnorePattern?: string;
            caughtErrors?: 'all' | 'none';
            caughtErrorsIgnorePattern?: string;
            destructuredArrayIgnorePattern?: string;
          }
      )
    ];

/**
 * Disallow unused variables
 * @see https://typescript-eslint.io/rules/no-unused-vars
 */
export type NoUnusedVars = 'off' | NoUnusedVars0;
