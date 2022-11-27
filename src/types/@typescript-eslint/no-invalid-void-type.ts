
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInvalidVoidType0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowInGenericTypeArguments?: boolean | string[];
        allowAsThisParameter?: boolean;
      }
    ];

export type NoInvalidVoidType = 'off' | NoInvalidVoidType0;
