/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce that a `label` tag has a text label and an associated control.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
 *
 * @minItems 1
 */
export type LabelHasAssociatedControl =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        labelComponents?: string[];
        labelAttributes?: string[];
        controlComponents?: string[];
        /**
         * Assert that the label has htmlFor, a nested label, both or either
         */
        assert?: 'htmlFor' | 'nesting' | 'both' | 'either';
        /**
         * JSX tree depth limit to check for accessible label
         */
        depth?: number;
        [k: string]: unknown | undefined;
      }
    ];
