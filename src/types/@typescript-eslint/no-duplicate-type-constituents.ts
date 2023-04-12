/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow duplicate constituents of union or intersection types
 * @see https://typescript-eslint.io/rules/no-duplicate-type-constituents
 *
 * @minItems 1
 */
export type NoDuplicateTypeConstituents =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreIntersections?: boolean;
        ignoreUnions?: boolean;
      }
    ];
