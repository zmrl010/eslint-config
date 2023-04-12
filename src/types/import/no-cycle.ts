/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Forbid a module from importing a module with a dependency path back to itself.
 * @see https://github.com/import-js/eslint-plugin-import/blob/v2.27.5/docs/rules/no-cycle.md
 *
 * @minItems 1
 */
export type NoCycle =
  | 'off'
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
        maxDepth?: number | '∞';
        /**
         * ignore external modules
         */
        ignoreExternal?: boolean;
        /**
         * Allow cyclic dependency if there is at least one dynamic import in the chain
         */
        allowUnsafeDynamicCyclicDependency?: boolean;
      }
    ];
