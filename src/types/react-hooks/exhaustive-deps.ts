/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ExhaustiveDeps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        additionalHooks?: string;
        enableDangerousAutofixThisMayCauseInfiniteLoops?: boolean;
      }
    ];

/**
 * verifies the list of dependencies for Hooks like useEffect and similar
 * @see https://github.com/facebook/react/issues/14920
 */
export type ExhaustiveDeps = 'off' | ExhaustiveDeps0;
