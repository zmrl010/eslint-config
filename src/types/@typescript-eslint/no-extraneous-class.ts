/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * Disallow classes used as namespaces
 * @see https://typescript-eslint.io/rules/no-extraneous-class
 *
 * @minItems 1
 */
export type NoExtraneousClass =
  | 'off'
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
