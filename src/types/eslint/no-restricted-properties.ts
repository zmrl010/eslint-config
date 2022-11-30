/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoRestrictedProperties =
  | 'off'
  | [
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
