/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require explicit accessibility modifiers on class properties and methods
 * @see https://typescript-eslint.io/rules/explicit-member-accessibility
 *
 * @minItems 1
 */
export type ExplicitMemberAccessibility =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        accessibility?: AccessibilityLevel;
        overrides?: {
          accessors?: AccessibilityLevel;
          constructors?: AccessibilityLevel;
          methods?: AccessibilityLevel;
          properties?: AccessibilityLevel;
          parameterProperties?: AccessibilityLevel;
        };
        ignoredMethodNames?: string[];
      }
    ];
export type AccessibilityLevel = 'explicit' | 'no-public' | 'off';
