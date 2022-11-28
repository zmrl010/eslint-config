/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ControlHasAssociatedLabel0 =
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
        [k: string]: unknown;
      }
    ];

export type ControlHasAssociatedLabel = 'off' | ControlHasAssociatedLabel0;
