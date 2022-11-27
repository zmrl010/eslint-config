/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type JsxHandlerNames0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      (
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: string;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            eventHandlerPrefix?: string;
            eventHandlerPropPrefix?: false;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            eventHandlerPrefix?: false;
            eventHandlerPropPrefix?: string;
            checkLocalVariables?: boolean;
            checkInlineFunction?: boolean;
          }
        | {
            checkLocalVariables?: boolean;
          }
        | {
            checkInlineFunction?: boolean;
          }
      )
    ];

/**
 * Enforce event handler naming conventions in JSX
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/jsx-handler-names.md
 */
export type JsxHandlerNames = 'off' | JsxHandlerNames0;
