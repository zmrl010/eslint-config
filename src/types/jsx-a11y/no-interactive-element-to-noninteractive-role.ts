/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoInteractiveElementToNoninteractiveRole0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: string[] | undefined;
      }
    ];

/**
 * Interactive elements should not be assigned non-interactive roles.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-interactive-element-to-noninteractive-role.md
 */
export type NoInteractiveElementToNoninteractiveRole =
  | 'off'
  | NoInteractiveElementToNoninteractiveRole0;
