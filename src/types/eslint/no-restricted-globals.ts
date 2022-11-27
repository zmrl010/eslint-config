
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRestrictedGlobals0 = [
  'off' | 'error' | 'warn',
  ...(
    | string
    | {
        name: string;
        message?: string;
      }
  )[]
];

export type NoRestrictedGlobals = 'off' | NoRestrictedGlobals0;
