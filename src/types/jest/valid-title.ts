/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type ValidTitle =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreTypeOfDescribeName?: boolean;
        disallowedWords?: string[];
        mustMatch?:
          | string
          | [string]
          | [string, string]
          | {
              [k: string]: string | [string] | [string, string];
            };
        mustNotMatch?:
          | string
          | [string]
          | [string, string]
          | {
              [k: string]: string | [string] | [string, string];
            };
      }
    ];
