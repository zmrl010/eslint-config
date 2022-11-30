/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce camelcase naming convention
 * @see https://eslint.org/docs/rules/camelcase
 *
 * @minItems 1
 */
export type Camelcase =
  | 'off'
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
