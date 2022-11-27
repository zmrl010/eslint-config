/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRestrictedProperties0 = [
  'off' | 'error' | 'warn',
  ...(
    | {
        object: string;
        property?: string;
        message?: string;
      }
    | {
        object?: string;
        property: string;
        message?: string;
      }
  )[]
];

/**
 * Disallow certain properties on certain objects
 * @see https://eslint.org/docs/rules/no-restricted-properties
 */
export type NoRestrictedProperties = 'off' | NoRestrictedProperties0;
