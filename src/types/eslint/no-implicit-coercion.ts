/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoImplicitCoercion0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        boolean?: boolean;
        number?: boolean;
        string?: boolean;
        disallowTemplateShorthand?: boolean;
        allow?: ('~' | '!!' | '+' | '*')[];
      }
    ];

/**
 * Disallow shorthand type conversions
 * @see https://eslint.org/docs/rules/no-implicit-coercion
 */
export type NoImplicitCoercion = 'off' | NoImplicitCoercion0;
