/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type MaxClassesPerFile0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | number
        | {
            ignoreExpressions?: boolean;
            max?: number;
          }
      )
    ];

/**
 * Enforce a maximum number of classes per file
 * @see https://eslint.org/docs/rules/max-classes-per-file
 */
export type MaxClassesPerFile = 'off' | MaxClassesPerFile0;
