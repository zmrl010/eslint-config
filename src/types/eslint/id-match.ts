/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require identifiers to match a specified regular expression
 * @see https://eslint.org/docs/rules/id-match
 *
 * @minItems 1
 */
export type IdMatch =
  | 'off'
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
