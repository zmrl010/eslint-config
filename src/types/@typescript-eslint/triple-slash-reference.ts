/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type TripleSlashReference =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        lib?: 'always' | 'never';
        path?: 'always' | 'never';
        types?: 'always' | 'never' | 'prefer-import';
      }
    ];
