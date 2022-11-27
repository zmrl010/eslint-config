/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

type NoRestrictedImports0 =
  | [
      'off' | 'error' | 'warn',
      ...(
        | unknown
        | {
            allowTypeImports?: boolean;
            [k: string]: unknown;
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
                [k: string]: unknown;
              }
          )[]
        ];
        patterns?:
          | unknown
          | {
              allowTypeImports?: boolean;
              [k: string]: unknown;
            }[];
        [k: string]: unknown;
      }
    ];

/**
 * Disallow specified modules when loaded by `import`
 * @see https://typescript-eslint.io/rules/no-restricted-imports
 */
export type NoRestrictedImports = 'off' | NoRestrictedImports0;
