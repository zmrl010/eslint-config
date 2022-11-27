
/**
 * THIS FILE IS AUTO-GENERATED.
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type ConsistentTypeImports0 =
  | ['off' | 'error' | 'warn']
  | [
      'off' | 'error' | 'warn',
      {
        prefer?: 'type-imports' | 'no-type-imports';
        disallowTypeAnnotations?: boolean;
        fixStyle?: 'separate-type-imports' | 'inline-type-imports';
      }
    ];

export type ConsistentTypeImports = 'off' | ConsistentTypeImports0;
