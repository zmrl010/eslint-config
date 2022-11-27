/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoMixedOperators0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        groups?: [
          (
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
            | '??'
          ),
          (
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
            | '??'
          ),
          ...(
            | '+'
            | '-'
            | '*'
            | '/'
            | '%'
            | '**'
            | '&'
            | '|'
            | '^'
            | '~'
            | '<<'
            | '>>'
            | '>>>'
            | '=='
            | '!='
            | '==='
            | '!=='
            | '>'
            | '>='
            | '<'
            | '<='
            | '&&'
            | '||'
            | 'in'
            | 'instanceof'
            | '?:'
            | '??'
          )[]
        ][];
        allowSamePrecedence?: boolean;
      }
    ];

/**
 * Disallow mixed binary operators
 * @see https://eslint.org/docs/rules/no-mixed-operators
 */
export type NoMixedOperators = 'off' | NoMixedOperators0;
