/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type KeySpacing0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            align?:
              | ('colon' | 'value')
              | {
                  mode?: 'strict' | 'minimum';
                  on?: 'colon' | 'value';
                  beforeColon?: boolean;
                  afterColon?: boolean;
                };
            mode?: 'strict' | 'minimum';
            beforeColon?: boolean;
            afterColon?: boolean;
          }
        | {
            singleLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              align?:
                | ('colon' | 'value')
                | {
                    mode?: 'strict' | 'minimum';
                    on?: 'colon' | 'value';
                    beforeColon?: boolean;
                    afterColon?: boolean;
                  };
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
        | {
            singleLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            multiLine?: {
              mode?: 'strict' | 'minimum';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
            align?: {
              mode?: 'strict' | 'minimum';
              on?: 'colon' | 'value';
              beforeColon?: boolean;
              afterColon?: boolean;
            };
          }
      )
    ];

/**
 * Enforce consistent spacing between keys and values in object literal properties
 * @see https://eslint.org/docs/rules/key-spacing
 */
export type KeySpacing = 'off' | KeySpacing0;
