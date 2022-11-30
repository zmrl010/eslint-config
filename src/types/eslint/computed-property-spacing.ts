/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent spacing inside computed property brackets
 * @see https://eslint.org/docs/rules/computed-property-spacing
 *
 * @minItems 1
 */
export type ComputedPropertySpacing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', 'always' | 'never']
  | [
      'off' | 'error' | 'warn',
      'always' | 'never',
      {
        enforceForClassMembers?: boolean;
      }
    ];
