/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type ParameterProperties =
  | 'off'
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
export type Modifier =
  | 'readonly'
  | 'private'
  | 'protected'
  | 'public'
  | 'private readonly'
  | 'protected readonly'
  | 'public readonly';
