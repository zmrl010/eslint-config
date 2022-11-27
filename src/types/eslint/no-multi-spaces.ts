/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMultiSpaces0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        exceptions?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^([A-Z][a-z]*)+$".
           */
          [k: string]: boolean;
        };
        ignoreEOLComments?: boolean;
      }
    ];

/**
 * Disallow multiple spaces
 * @see https://eslint.org/docs/rules/no-multi-spaces
 */
export type NoMultiSpaces = 'off' | NoMultiSpaces0;
