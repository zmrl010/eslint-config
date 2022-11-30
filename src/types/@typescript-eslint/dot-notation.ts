/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type DotNotation =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowKeywords?: boolean;
        allowPattern?: string;
        allowPrivateClassPropertyAccess?: boolean;
        allowProtectedClassPropertyAccess?: boolean;
        allowIndexSignaturePropertyAccess?: boolean;
      }
    ];
