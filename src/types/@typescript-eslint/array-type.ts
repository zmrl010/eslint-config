/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrayType0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * The array type expected for mutable cases...
         */
        default?: 'array' | 'generic' | 'array-simple';
        /**
         * The array type expected for readonly cases. If omitted, the value for `default` will be used.
         */
        readonly?: 'array' | 'generic' | 'array-simple';
        [k: string]: unknown;
      }
    ];

/**
 * Require consistently using either `T[]` or `Array<T>` for arrays
 * @see https://typescript-eslint.io/rules/array-type
 */
export type ArrayType = 'off' | ArrayType0;
