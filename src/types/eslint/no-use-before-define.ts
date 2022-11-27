/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUseBeforeDefine0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | 'nofunc'
        | {
            functions?: boolean;
            classes?: boolean;
            variables?: boolean;
            allowNamedExports?: boolean;
          }
      )
    ];

/**
 * Disallow the use of variables before they are defined
 * @see https://eslint.org/docs/rules/no-use-before-define
 */
export type NoUseBeforeDefine = 'off' | NoUseBeforeDefine0;
