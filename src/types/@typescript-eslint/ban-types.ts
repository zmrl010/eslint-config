
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type BanTypes0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        types?: {
          [k: string]:
            | null
            | boolean
            | string
            | {
                message?: string;
                fixWith?: string;
              };
        };
        extendDefaults?: boolean;
      }
    ];

export type BanTypes = 'off' | BanTypes0;
