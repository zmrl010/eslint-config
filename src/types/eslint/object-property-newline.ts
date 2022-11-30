/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce placing object properties on separate lines
 * @see https://eslint.org/docs/rules/object-property-newline
 *
 * @minItems 1
 */
export type ObjectPropertyNewline =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowAllPropertiesOnSameLine?: boolean;
        allowMultiplePropertiesPerLine?: boolean;
      }
    ];
