/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
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

/**
 * Enforce placing object properties on separate lines
 * @see https://eslint.org/docs/rules/object-property-newline
 */
export type ObjectPropertyNewline = 'off' | ObjectPropertyNewline0;
