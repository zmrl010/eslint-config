/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow `void` type outside of generic or return types
 * @see https://typescript-eslint.io/rules/no-invalid-void-type
 */
export type NoInvalidVoidType = 'off' | NoInvalidVoidType0;
