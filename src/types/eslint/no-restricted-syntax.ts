
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRestrictedSyntax0 = [
  'off' | 'error' | 'warn',
  ...(
    | string
    | {
        selector: string;
        message?: string;
      }
  )[]
];

export type NoRestrictedSyntax = 'off' | NoRestrictedSyntax0;
