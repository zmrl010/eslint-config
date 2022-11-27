
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type ExplicitMemberAccessibility = 'off' | ExplicitMemberAccessibility0;
