/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ForbidDomProps0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        forbid?: (
          | string
          | {
              propName?: string;
              disallowedFor?: string[];
              message?: string;
              [k: string]: unknown;
            }
        )[];
      }
    ];

/**
 * Disallow certain props on DOM Nodes
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/forbid-dom-props.md
 */
export type ForbidDomProps = 'off' | ForbidDomProps0;
