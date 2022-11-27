
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type Namespace0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * If `false`, will report computed (and thus, un-lintable) references to namespace members.
         */
        allowComputed?: boolean;
      }
    ];

export type Namespace = 'off' | Namespace0;
