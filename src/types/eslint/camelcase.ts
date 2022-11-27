
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type Camelcase = 'off' | Camelcase0;
