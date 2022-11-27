/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MethodSignatureStyle0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'property' | 'method'];

/**
 * Enforce using a particular method signature syntax
 * @see https://typescript-eslint.io/rules/method-signature-style
 */
export type MethodSignatureStyle = 'off' | MethodSignatureStyle0;
