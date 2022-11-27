
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoRelativeParentImports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        commonjs?: boolean;
        amd?: boolean;
        esmodule?: boolean;
        /**
         * @minItems 1
         */
        ignore?: [string, ...string[]];
      }
    ];

export type NoRelativeParentImports = 'off' | NoRelativeParentImports0;
