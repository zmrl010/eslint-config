/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce consistent usage of type imports
 * @see https://typescript-eslint.io/rules/consistent-type-imports
 *
 * @minItems 1
 */
export type ConsistentTypeImports =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        prefer?: 'type-imports' | 'no-type-imports';
        disallowTypeAnnotations?: boolean;
        fixStyle?: 'separate-type-imports' | 'inline-type-imports';
      }
    ];
