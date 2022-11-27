/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ExplicitMemberAccessibility0 =
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
type AccessibilityLevel = 'explicit' | 'no-public' | 'off';

/**
 * Require explicit accessibility modifiers on class properties and methods
 * @see https://typescript-eslint.io/rules/explicit-member-accessibility
 */
export type ExplicitMemberAccessibility = 'off' | ExplicitMemberAccessibility0;
