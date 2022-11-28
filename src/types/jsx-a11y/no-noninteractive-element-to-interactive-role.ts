/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoNoninteractiveElementToInteractiveRole0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        [k: string]: string[];
      }
    ];

/**
 * Non-interactive elements should not be assigned interactive roles.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/no-noninteractive-element-to-interactive-role.md
 */
export type NoNoninteractiveElementToInteractiveRole =
  | 'off'
  | NoNoninteractiveElementToInteractiveRole0;
