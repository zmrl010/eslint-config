/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * verifies the list of dependencies for Hooks like useEffect and similar
 * @see https://github.com/facebook/react/issues/14920
 *
 * @minItems 1
 */
export type ExhaustiveDeps =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        additionalHooks?: string;
        enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
      }
    ];
