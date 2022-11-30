/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow specified modules when loaded by `import`
 * @see https://typescript-eslint.io/rules/no-restricted-imports
 */
export type NoRestrictedImports =
  | 'off'
  | (
      | [
          'off' | 'error' | 'warn',
          ...(
            | unknown
            | {
                allowTypeImports?: boolean;
                [k: string]: unknown | undefined;
              }
          )[]
        ]
      | ['off' | 'error' | 'warn']
      | [
          'off' | 'error' | 'warn',
          {
            /**
             * @minItems 1
             */
            paths?: [
              'off' | 'error' | 'warn',
              ...(
                | unknown
                | {
                    allowTypeImports?: boolean;
                    [k: string]: unknown | undefined;
                  }
              )[]
            ];
            patterns?:
              | unknown
              | {
                  allowTypeImports?: boolean;
                  [k: string]: unknown | undefined;
                }[];
            [k: string]: unknown | undefined;
          }
        ]
    );
