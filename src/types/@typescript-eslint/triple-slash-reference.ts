
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type TripleSlashReference = 'off' | TripleSlashReference0;
