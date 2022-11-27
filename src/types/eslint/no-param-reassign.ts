/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoParamReassign0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            props?: false;
          }
        | {
            props?: true;
            ignorePropertyModificationsFor?: string[];
            ignorePropertyModificationsForRegex?: string[];
          }
      )
    ];

/**
 * Disallow reassigning `function` parameters
 * @see https://eslint.org/docs/rules/no-param-reassign
 */
export type NoParamReassign = 'off' | NoParamReassign0;
