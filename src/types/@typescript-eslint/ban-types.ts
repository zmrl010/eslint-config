/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Disallow certain types
 * @see https://typescript-eslint.io/rules/ban-types
 */
export type BanTypes = 'off' | BanTypes0;
