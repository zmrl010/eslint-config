/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type BanTypes =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        types?: {
          [k: string]:
            | (
                | null
                | boolean
                | string
                | {
                    message?: string;
                    fixWith?: string;
                  }
              )
            | undefined;
        };
        extendDefaults?: boolean;
      }
    ];
