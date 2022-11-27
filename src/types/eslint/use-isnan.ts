
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type UseIsnan = 'off' | UseIsnan0;
