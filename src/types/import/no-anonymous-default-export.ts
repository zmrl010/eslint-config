/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoAnonymousDefaultExport =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * If `false`, will report default export of an array
         */
        allowArray?: boolean;
        /**
         * If `false`, will report default export of an arrow function
         */
        allowArrowFunction?: boolean;
        /**
         * If `false`, will report default export of a function call
         */
        allowCallExpression?: boolean;
        /**
         * If `false`, will report default export of an anonymous class
         */
        allowAnonymousClass?: boolean;
        /**
         * If `false`, will report default export of an anonymous function
         */
        allowAnonymousFunction?: boolean;
        /**
         * If `false`, will report default export of a literal
         */
        allowLiteral?: boolean;
        /**
         * If `false`, will report default export of an object expression
         */
        allowObject?: boolean;
      }
    ];
