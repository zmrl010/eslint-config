
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type NoUnnecessaryCondition = 'off' | NoUnnecessaryCondition0;
