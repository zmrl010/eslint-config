/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type TripleSlashReference0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        lib?: 'always' | 'never';
        path?: 'always' | 'never';
        types?: 'always' | 'never' | 'prefer-import';
      }
    ];

/**
 * Disallow certain triple slash directives in favor of ES6-style import declarations
 * @see https://typescript-eslint.io/rules/triple-slash-reference
 */
export type TripleSlashReference = 'off' | TripleSlashReference0;
