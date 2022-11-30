/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
export type TypeAnnotationSpacing =
  | 'off'
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        before?: boolean;
        after?: boolean;
        overrides?: {
          colon?: {
            before?: boolean;
            after?: boolean;
          };
          arrow?: {
            before?: boolean;
            after?: boolean;
          };
          variable?: {
            before?: boolean;
            after?: boolean;
          };
          parameter?: {
            before?: boolean;
            after?: boolean;
          };
          property?: {
            before?: boolean;
            after?: boolean;
          };
          returnType?: {
            before?: boolean;
            after?: boolean;
          };
        };
      }
    ];
