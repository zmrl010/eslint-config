/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnnecessaryCondition0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to ignore constant loop conditions, such as `while (true)`.
         */
        allowConstantLoopConditions?: boolean;
        /**
         * Whether to not error when running with a tsconfig that has strictNullChecks turned.
         */
        allowRuleToRunWithoutStrictNullChecksIKnowWhatIAmDoing?: boolean;
      }
    ];

/**
 * Disallow conditionals where the type is always truthy or always falsy
 * @see https://typescript-eslint.io/rules/no-unnecessary-condition
 */
export type NoUnnecessaryCondition = 'off' | NoUnnecessaryCondition0;
