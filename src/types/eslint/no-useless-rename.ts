
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUselessRename0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        ignoreDestructuring?: boolean;
        ignoreImport?: boolean;
        ignoreExport?: boolean;
      }
    ];

export type NoUselessRename = 'off' | NoUselessRename0;
