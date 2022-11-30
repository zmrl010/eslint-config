/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow variable declarations from shadowing variables declared in the outer scope
 * @see https://typescript-eslint.io/rules/no-shadow
 *
 * @minItems 1
 */
export type NoShadow =
  | 'off'
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
