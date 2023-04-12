/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce template literal expressions to be of `string` type
 * @see https://typescript-eslint.io/rules/restrict-template-expressions
 *
 * @minItems 1
 */
export type RestrictTemplateExpressions =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to allow `number` typed values in template expressions.
         */
        allowNumber?: boolean;
        /**
         * Whether to allow `boolean` typed values in template expressions.
         */
        allowBoolean?: boolean;
        /**
         * Whether to allow `any` typed values in template expressions.
         */
        allowAny?: boolean;
        /**
         * Whether to allow `nullish` typed values in template expressions.
         */
        allowNullish?: boolean;
        /**
         * Whether to allow `regexp` typed values in template expressions.
         */
        allowRegExp?: boolean;
        /**
         * Whether to allow `never` typed values in template expressions.
         */
        allowNever?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
