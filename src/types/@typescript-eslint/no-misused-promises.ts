/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type NoMisusedPromises =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        checksConditionals?: boolean;
        checksVoidReturn?:
          | boolean
          | {
              arguments?: boolean;
              attributes?: boolean;
              properties?: boolean;
              returns?: boolean;
              variables?: boolean;
            };
        checksSpreads?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
