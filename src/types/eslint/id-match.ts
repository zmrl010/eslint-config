
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type IdMatch0 =
  | ['off' | 'error' | 'warn']
  | ['off' | 'error' | 'warn', string]
  | [
      'off' | 'error' | 'warn',
      string,
      {
        properties?: boolean;
        classFields?: boolean;
        onlyDeclarations?: boolean;
        ignoreDestructuring?: boolean;
      }
    ];

export type IdMatch = 'off' | IdMatch0;
