/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnderscoreDangle0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allow?: string[];
        allowAfterThis?: boolean;
        allowAfterSuper?: boolean;
        allowAfterThisConstructor?: boolean;
        enforceInMethodNames?: boolean;
        allowFunctionParams?: boolean;
        enforceInClassFields?: boolean;
      }
    ];

/**
 * Disallow dangling underscores in identifiers
 * @see https://eslint.org/docs/rules/no-underscore-dangle
 */
export type NoUnderscoreDangle = 'off' | NoUnderscoreDangle0;
