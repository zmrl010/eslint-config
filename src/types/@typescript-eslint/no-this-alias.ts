
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoThisAlias0 =
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

export type NoThisAlias = 'off' | NoThisAlias0;
