/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Camelcase0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreDestructuring?: boolean;
        ignoreImports?: boolean;
        ignoreGlobals?: boolean;
        properties?: 'always' | 'never';
        /**
         * @minItems 0
         */
        allow?: [] | [string];
      }
    ];

/**
 * Enforce camelcase naming convention
 * @see https://eslint.org/docs/rules/camelcase
 */
export type Camelcase = 'off' | Camelcase0;
