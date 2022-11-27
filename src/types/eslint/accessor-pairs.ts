/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type AccessorPairs0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        getWithoutSet?: boolean;
        setWithoutGet?: boolean;
        enforceForClassMembers?: boolean;
      }
    ];

/**
 * Enforce getter and setter pairs in objects and classes
 * @see https://eslint.org/docs/rules/accessor-pairs
 */
export type AccessorPairs = 'off' | AccessorPairs0;
