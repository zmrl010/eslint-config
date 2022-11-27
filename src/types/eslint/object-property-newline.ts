
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ObjectPropertyNewline0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAllPropertiesOnSameLine?: boolean;
        allowMultiplePropertiesPerLine?: boolean;
      }
    ];

export type ObjectPropertyNewline = 'off' | ObjectPropertyNewline0;
