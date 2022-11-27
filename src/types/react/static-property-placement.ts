/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type StaticPropertyPlacement0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      'static public field' | 'static getter' | 'property assignment'
    ]
  | [
      'off' | 'error' | 'warn',
      'static public field' | 'static getter' | 'property assignment',
      {
        propTypes?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        defaultProps?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        childContextTypes?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        contextTypes?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        contextType?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
        displayName?:
          | 'static public field'
          | 'static getter'
          | 'property assignment';
      }
    ];

/**
 * Enforces where React component static properties should be positioned.
 * @see https://github.com/jsx-eslint/eslint-plugin-react/tree/master/docs/rules/static-property-placement.md
 */
export type StaticPropertyPlacement = 'off' | StaticPropertyPlacement0;
