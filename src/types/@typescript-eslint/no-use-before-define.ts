/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow the use of variables before they are defined
 * @see https://typescript-eslint.io/rules/no-use-before-define
 *
 * @minItems 1
 */
export type NoUseBeforeDefine =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | 'nofunc'
        | {
            functions?: boolean;
            classes?: boolean;
            enums?: boolean;
            variables?: boolean;
            typedefs?: boolean;
            ignoreTypeReferences?: boolean;
            allowNamedExports?: boolean;
          }
      )
    ];
