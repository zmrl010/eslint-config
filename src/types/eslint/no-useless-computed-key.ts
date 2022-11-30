/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow unnecessary computed property keys in objects and classes
 * @see https://eslint.org/docs/rules/no-useless-computed-key
 *
 * @minItems 1
 */
export type NoUselessComputedKey =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForClassMembers?: boolean;
      }
    ];
