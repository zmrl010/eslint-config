
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoRestrictedProperties = 'off' | NoRestrictedProperties0;
