/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow unused expressions
 * @see https://typescript-eslint.io/rules/no-unused-expressions
 *
 * @minItems 1
 */
export type NoUnusedExpressions =
  | 'off'
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
