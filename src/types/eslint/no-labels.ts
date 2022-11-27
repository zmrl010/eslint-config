
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoLabels0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        allowLoop?: boolean;
        allowSwitch?: boolean;
      }
    ];

export type NoLabels = 'off' | NoLabels0;
