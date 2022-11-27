/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type SwitchColonSpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
      }
    ];

/**
 * Enforce spacing around colons of switch statements
 * @see https://eslint.org/docs/rules/switch-colon-spacing
 */
export type SwitchColonSpacing = 'off' | SwitchColonSpacing0;
