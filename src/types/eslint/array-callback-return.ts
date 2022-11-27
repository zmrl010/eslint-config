
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ArrayCallbackReturn0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowImplicit?: boolean;
        checkForEach?: boolean;
      }
    ];

export type ArrayCallbackReturn = 'off' | ArrayCallbackReturn0;
