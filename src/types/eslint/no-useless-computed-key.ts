/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUselessComputedKey0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        enforceForClassMembers?: boolean;
      }
    ];

/**
 * Disallow unnecessary computed property keys in objects and classes
 * @see https://eslint.org/docs/rules/no-useless-computed-key
 */
export type NoUselessComputedKey = 'off' | NoUselessComputedKey0;
