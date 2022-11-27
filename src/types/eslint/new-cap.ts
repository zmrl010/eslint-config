
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NewCap0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        newIsCap?: boolean;
        capIsNew?: boolean;
        newIsCapExceptions?: string[];
        newIsCapExceptionPattern?: string;
        capIsNewExceptions?: string[];
        capIsNewExceptionPattern?: string;
        properties?: boolean;
      }
    ];

export type NewCap = 'off' | NewCap0;
