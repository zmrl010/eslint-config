/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type UseIsnan0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForSwitchCase?: boolean;
        enforceForIndexOf?: boolean;
      }
    ];

/**
 * Require calls to `isNaN()` when checking for `NaN`
 * @see https://eslint.org/docs/rules/use-isnan
 */
export type UseIsnan = 'off' | UseIsnan0;
