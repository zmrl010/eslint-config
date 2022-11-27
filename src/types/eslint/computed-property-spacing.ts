/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ComputedPropertySpacing0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        enforceForClassMembers?: boolean;
      }
    ];

/**
 * Enforce consistent spacing inside computed property brackets
 * @see https://eslint.org/docs/rules/computed-property-spacing
 */
export type ComputedPropertySpacing = 'off' | ComputedPropertySpacing0;
