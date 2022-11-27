
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoParamReassign = 'off' | NoParamReassign0;
