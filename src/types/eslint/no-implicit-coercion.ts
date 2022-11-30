/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoImplicitCoercion =
  | 'off'
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
