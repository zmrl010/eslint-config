/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce component methods order
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/sort-comp.md
 *
 * @minItems 1
 */
export type SortComp =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        order?: string[];
        groups?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^.*$".
           */
          [k: string]: string[];
        };
      }
    ];
