/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow TypeScript namespaces
 * @see https://typescript-eslint.io/rules/no-namespace
 *
 * @minItems 1
 */
export type NoNamespace =
  | 'off'
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
