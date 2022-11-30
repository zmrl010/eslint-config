/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type KeySpacing =
  | 'off'
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
