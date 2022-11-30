/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

export type NoRestrictedImports =
  | 'off'
  | (
      | [
          'off' | 'error' | 'warn',
          ...(
            | string
            | {
                name: string;
                message?: string;
                importNames?: string[];
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
                | string
                | {
                    name: string;
                    message?: string;
                    importNames?: string[];
                  }
              )[]
            ];
            patterns?:
              | string[]
              | {
                  /**
                   * @minItems 1
                   */
                  importNames?: [string, ...string[]];
                  /**
                   * @minItems 1
                   */
                  group: [string, ...string[]];
                  message?: string;
                  caseSensitive?: boolean;
                }[];
          }
        ]
    );
