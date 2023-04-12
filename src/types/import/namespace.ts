/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Ensure imported namespaces contain dereferenced properties as they are dereferenced.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/namespace.md
 *
 * @minItems 1
 */
export type Namespace =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * If `false`, will report computed (and thus, un-lintable) references to namespace members.
         */
        allowComputed?: boolean;
      }
    ];
