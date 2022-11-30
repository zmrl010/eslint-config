/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce that elements with ARIA roles must use a valid, non-abstract ARIA role.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/aria-role.md
 *
 * @minItems 1
 */
export type AriaRole =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowedInvalidRoles?: string[];
        ignoreNonDOM?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
