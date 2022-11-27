/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoNamespace0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to allow `declare` with custom TypeScript namespaces.
         */
        allowDeclarations?: boolean;
        /**
         * Whether to allow `declare` with custom TypeScript namespaces inside definition files.
         */
        allowDefinitionFiles?: boolean;
      }
    ];

/**
 * Disallow TypeScript namespaces
 * @see https://typescript-eslint.io/rules/no-namespace
 */
export type NoNamespace = 'off' | NoNamespace0;
