
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoUseBeforeDefine = 'off' | NoUseBeforeDefine0;
