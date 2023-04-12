/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Enforce that a control (an interactive element) has a text label.
 * @see https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/control-has-associated-label.md
 *
 * @minItems 1
 */
export type ControlHasAssociatedLabel =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        labelAttributes?: string[];
        controlComponents?: string[];
        ignoreElements?: string[];
        ignoreRoles?: string[];
        /**
         * JSX tree depth limit to check for accessible label
         */
        depth?: number;
        [k: string]: unknown | undefined;
      }
    ];
