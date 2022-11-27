
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoUnusedExpressions = 'off' | NoUnusedExpressions0;
