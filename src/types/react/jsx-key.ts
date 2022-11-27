
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxKey0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checkFragmentShorthand?: boolean;
        checkKeyMustBeforeSpread?: boolean;
        warnOnDuplicates?: boolean;
      }
    ];

export type JsxKey = 'off' | JsxKey0;
