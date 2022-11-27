
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NoExtraneousClass0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        /**
         * Whether to allow extraneous classes that contain only a constructor.
         */
        allowConstructorOnly?: boolean;
        /**
         * Whether to allow extraneous classes that have no body (i.e. are empty).
         */
        allowEmpty?: boolean;
        /**
         * Whether to allow extraneous classes that only contain static members.
         */
        allowStaticOnly?: boolean;
        /**
         * Whether to allow extraneous classes that include a decorator.
         */
        allowWithDecorator?: boolean;
      }
    ];

export type NoExtraneousClass = 'off' | NoExtraneousClass0;
