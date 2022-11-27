/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoShadow0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        builtinGlobals?: boolean;
        hoist?: 'all' | 'functions' | 'never';
        allow?: string[];
        ignoreOnInitialization?: boolean;
        ignoreTypeValueShadow?: boolean;
        ignoreFunctionTypeParameterNameValueShadow?: boolean;
      }
    ];

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope
 * @see https://typescript-eslint.io/rules/no-shadow
 */
export type NoShadow = 'off' | NoShadow0;
