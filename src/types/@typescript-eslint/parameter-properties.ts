/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ParameterProperties0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * @minItems 1
         */
        allow?: [Modifier, ...Modifier[]];
        prefer?: 'class-property' | 'parameter-property';
      }
    ];
type Modifier =
  | 'readonly'
  | 'private'
  | 'protected'
  | 'public'
  | 'private readonly'
  | 'protected readonly'
  | 'public readonly';

/**
 * Require or disallow parameter properties in class constructors
 * @see https://typescript-eslint.io/rules/parameter-properties
 */
export type ParameterProperties = 'off' | ParameterProperties0;
