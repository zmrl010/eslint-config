/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

/**
 * @minItems 1
 */
type NamingConvention0 = [
  'off' | 'error' | 'warn',
  ...(
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: (
          | 'default'
          | 'variableLike'
          | 'memberLike'
          | 'typeLike'
          | 'method'
          | 'property'
          | 'variable'
          | 'function'
          | 'parameter'
          | 'parameterProperty'
          | 'accessor'
          | 'enumMember'
          | 'classMethod'
          | 'objectLiteralMethod'
          | 'typeMethod'
          | 'classProperty'
          | 'objectLiteralProperty'
          | 'typeProperty'
          | 'class'
          | 'interface'
          | 'typeAlias'
          | 'enum'
          | 'typeParameter'
        )[];
        modifiers?: (
          | 'const'
          | 'readonly'
          | 'static'
          | 'public'
          | 'protected'
          | 'private'
          | 'abstract'
          | 'destructured'
          | 'global'
          | 'exported'
          | 'unused'
          | 'requiresQuotes'
          | 'override'
          | 'async'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'default';
        modifiers?: (
          | 'const'
          | 'readonly'
          | 'static'
          | 'public'
          | 'protected'
          | 'private'
          | 'abstract'
          | 'destructured'
          | 'global'
          | 'exported'
          | 'unused'
          | 'requiresQuotes'
          | 'override'
          | 'async'
        )[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'variableLike';
        modifiers?: ('unused' | 'async')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'variable';
        modifiers?: (
          | 'const'
          | 'destructured'
          | 'exported'
          | 'global'
          | 'unused'
          | 'async'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'function';
        modifiers?: ('exported' | 'global' | 'unused' | 'async')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'parameter';
        modifiers?: ('destructured' | 'unused')[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'memberLike';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'classProperty';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
          | 'override'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'objectLiteralProperty';
        modifiers?: ('public' | 'requiresQuotes')[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeProperty';
        modifiers?: ('public' | 'readonly' | 'requiresQuotes')[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'parameterProperty';
        modifiers?: ('private' | 'protected' | 'public' | 'readonly')[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'property';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'readonly'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'classMethod';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'objectLiteralMethod';
        modifiers?: ('public' | 'requiresQuotes' | 'async')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeMethod';
        modifiers?: ('public' | 'requiresQuotes')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'method';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
          | 'async'
        )[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'accessor';
        modifiers?: (
          | 'abstract'
          | 'private'
          | 'protected'
          | 'public'
          | 'requiresQuotes'
          | 'static'
          | 'override'
        )[];
        types?: ('boolean' | 'string' | 'number' | 'function' | 'array')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'enumMember';
        modifiers?: 'requiresQuotes'[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeLike';
        modifiers?: ('abstract' | 'exported' | 'unused')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'class';
        modifiers?: ('abstract' | 'exported' | 'unused')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'interface';
        modifiers?: ('exported' | 'unused')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeAlias';
        modifiers?: ('exported' | 'unused')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'enum';
        modifiers?: ('exported' | 'unused')[];
      }
    | {
        format:
          | (
              | 'camelCase'
              | 'strictCamelCase'
              | 'PascalCase'
              | 'StrictPascalCase'
              | 'snake_case'
              | 'UPPER_CASE'
            )[]
          | null;
        custom?: {
          match: boolean;
          regex: string;
          [k: string]: unknown;
        };
        leadingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        trailingUnderscore?:
          | 'forbid'
          | 'allow'
          | 'require'
          | 'requireDouble'
          | 'allowDouble'
          | 'allowSingleOrDouble';
        prefix?: string[];
        suffix?: string[];
        failureMessage?: string;
        filter?:
          | string
          | {
              match: boolean;
              regex: string;
              [k: string]: unknown;
            };
        selector: 'typeParameter';
        modifiers?: 'unused'[];
      }
  )[]
];

/**
 * Enforce naming conventions for everything across a codebase
 * @see https://typescript-eslint.io/rules/naming-convention
 */
export type NamingConvention = 'off' | NamingConvention0;
