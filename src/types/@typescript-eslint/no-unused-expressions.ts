/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnusedExpressions0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowShortCircuit?: boolean;
        allowTernary?: boolean;
        allowTaggedTemplates?: boolean;
        enforceForJSX?: boolean;
      }
    ];

/**
 * Disallow unused expressions
 * @see https://typescript-eslint.io/rules/no-unused-expressions
 */
export type NoUnusedExpressions = 'off' | NoUnusedExpressions0;
