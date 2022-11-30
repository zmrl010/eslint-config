/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoRestrictedGlobals =
  | 'off'
  | [
      'off' | 'error' | 'warn',
      ...(
        | string
        | {
            name: string;
            message?: string;
          }
      )[]
    ];
