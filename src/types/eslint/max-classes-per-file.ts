/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce a maximum number of classes per file
 * @see https://eslint.org/docs/rules/max-classes-per-file
 *
 * @minItems 1
 */
export type MaxClassesPerFile =
  | 'off'
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
