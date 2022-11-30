/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce getter and setter pairs in objects and classes
 * @see https://eslint.org/docs/rules/accessor-pairs
 *
 * @minItems 1
 */
export type AccessorPairs =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        getWithoutSet?: boolean;
        setWithoutGet?: boolean;
        enforceForClassMembers?: boolean;
      }
    ];
