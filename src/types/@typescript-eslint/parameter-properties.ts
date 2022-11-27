
/**
 * THIS FILE IS AUTO-GENERATED.
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

export type ParameterProperties = 'off' | ParameterProperties0;
