/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Require type annotations in certain places
 * @see https://typescript-eslint.io/rules/typedef
 *
 * @minItems 1
 */
export type Typedef =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        arrayDestructuring?: boolean;
        arrowParameter?: boolean;
        memberVariableDeclaration?: boolean;
        objectDestructuring?: boolean;
        parameter?: boolean;
        propertyDeclaration?: boolean;
        variableDeclaration?: boolean;
        variableDeclarationIgnoreFunction?: boolean;
        [k: string]: unknown | undefined;
      }
    ];
