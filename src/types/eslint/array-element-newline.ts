
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrayElementNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | BasicConfig
        | {
            ArrayExpression?: BasicConfig;
            ArrayPattern?: BasicConfig;
          }
      )
    ];
type BasicConfig =
  | ('always' | 'never' | 'consistent')
  | {
      multiline?: boolean;
      minItems?: number | null;
    };

export type ArrayElementNewline = 'off' | ArrayElementNewline0;
