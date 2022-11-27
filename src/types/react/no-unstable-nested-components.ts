
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoUnstableNestedComponents0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        customValidators?: string[];
        allowAsProps?: boolean;
      }
    ];

export type NoUnstableNestedComponents = 'off' | NoUnstableNestedComponents0;
