/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow specified syntax
 * @see https://eslint.org/docs/rules/no-restricted-syntax
 */
export type NoRestrictedSyntax = 'off' | NoRestrictedSyntax0;
