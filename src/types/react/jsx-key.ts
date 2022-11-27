/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow missing `key` props in iterators/collection literals
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-key.md
 */
export type JsxKey = 'off' | JsxKey0;
