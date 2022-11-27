
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type DotNotation0 =
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

export type DotNotation = 'off' | DotNotation0;
