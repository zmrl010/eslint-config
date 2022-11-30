/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoThisAlias =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to ignore destructurings, such as `const { props, state } = this`.
         */
        allowDestructuring?: boolean;
        /**
         * Names to ignore, such as ["self"] for `const self = this;`.
         */
        allowedNames?: string[];
      }
    ];
