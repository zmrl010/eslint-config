/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type AriaRole0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowedInvalidRoles?: string[];
        ignoreNonDOM?: boolean;
        [k: string]: unknown;
      }
    ];

/**
 * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md
 */
export type AriaRole = 'off' | AriaRole0;
