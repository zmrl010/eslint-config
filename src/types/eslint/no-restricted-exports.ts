/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow specified names in exports
 * @see https://eslint.org/docs/rules/no-restricted-exports
 *
 * @minItems 1
 */
export type NoRestrictedExports =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            restrictedNamedExports?: string[];
          }
        | {
            restrictedNamedExports?: string[];
            restrictDefaultExports?: {
              direct?: boolean;
              named?: boolean;
              defaultFrom?: boolean;
              namedFrom?: boolean;
              namespaceFrom?: boolean;
            };
          }
      )
    ];
