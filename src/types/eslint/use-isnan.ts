/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require calls to `isNaN()` when checking for `NaN`
 * @see https://eslint.org/docs/rules/use-isnan
 *
 * @minItems 1
 */
export type UseIsnan =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForSwitchCase?: boolean;
        enforceForIndexOf?: boolean;
      }
    ];
