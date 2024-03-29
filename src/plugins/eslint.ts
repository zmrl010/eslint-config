import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import type { Eslint } from '../types/eslint/index.js';

export const config = {
  rules: {
    'accessor-pairs': ['error'],
    'array-callback-return': ['error'],
    'arrow-body-style': 'off',
    'block-scoped-var': ['error'],
    camelcase: 'off',
    'capitalized-comments': 'off',
    'class-methods-use-this': 'off',
    complexity: ['error', 20],
    'consistent-return': ['error'],
    'consistent-this': 'off',
    'constructor-super': ['error'],
    curly: ['error', 'multi-line'],
    'default-case': ['error'],
    'default-case-last': ['error'],
    'default-param-last': 'off',
    'dot-notation': ['error'],
    eqeqeq: 'off',
    'for-direction': ['error'],
    'func-name-matching': ['error'],
    'func-names': ['error'],
    'func-style': 'off',
    'getter-return': ['error', { allowImplicit: true }],
    'grouped-accessor-pairs': 'off',
    'guard-for-in': ['error'],
    'id-denylist': ['error'],
    'id-length': 'off',
    'id-match': [
      'error',
      // camelCase, PascalCase, __filename, CONST_VALUE, stream$, $el
      '^\\$?(__)?(([A-Z]|[a-z]|[0-9]+)|([A-Z_]))*\\$?$',
    ],
    'init-declarations': 'off',
    'line-comment-position': 'off',
    'lines-between-class-members': 'off',
    'logical-assignment-operators': ['error'],
    'max-classes-per-file': 'off',
    'max-depth': ['error', 4],
    'max-lines': [
      'error',
      { max: 1500, skipBlankLines: false, skipComments: false },
    ],
    'max-lines-per-function': 'off',
    'max-nested-callbacks': ['error', 7],
    'max-params': ['error', 7],
    'max-statements': 'off',
    'max-statements-per-line': ['error', { max: 1 }],
    'multiline-comment-style': 'off',
    'new-cap': ['error'],
    'no-alert': ['error'],
    'no-array-constructor': ['error'],
    'no-async-promise-executor': 'off',
    'no-await-in-loop': ['error'],
    'no-bitwise': ['error'],
    'no-caller': ['error'],
    'no-case-declarations': ['error'],
    'no-class-assign': ['error'],
    'no-compare-neg-zero': ['error'],
    'no-cond-assign': ['error'],
    'no-console': 'off',
    'no-const-assign': ['error'],
    'no-constant-binary-expression': ['error'],
    'no-constant-condition': ['error'],
    'no-constructor-return': ['error'],
    'no-continue': 'off',
    'no-control-regex': ['error'],
    'no-debugger': ['error'],
    'no-delete-var': ['error'],
    'no-div-regex': ['error'],
    'no-dupe-args': ['error'],
    'no-dupe-class-members': ['error'],
    'no-dupe-else-if': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-duplicate-imports': ['error'],
    'no-else-return': 'off',
    'no-empty': ['error'],
    'no-empty-character-class': ['error'],
    'no-empty-static-block': ['error'],
    'no-new-native-nonconstructor': ['error'],
    'no-empty-function': 'off',
    'no-empty-pattern': ['error'],
    'no-eq-null': 'off',
    'no-eval': ['error'],
    'no-ex-assign': ['error'],
    'no-extend-native': ['error'],
    'no-extra-bind': ['error'],
    'no-extra-boolean-cast': 'off',
    'no-extra-label': ['error'],
    'no-fallthrough': ['error'],
    'no-func-assign': ['error'],
    'no-global-assign': ['error'],
    'no-implicit-coercion': 'off',
    'no-implicit-globals': ['error'],
    'no-implied-eval': ['error'],
    'no-import-assign': ['error'],
    'no-inline-comments': 'off',
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-invalid-this': ['error'],
    'no-irregular-whitespace': ['error'],
    'no-iterator': ['error'],
    'no-label-var': ['error'],
    'no-labels': ['error'],
    'no-lone-blocks': ['error'],
    'no-lonely-if': ['error'],
    'no-loop-func': ['error'],
    'no-loss-of-precision': ['error'],
    'no-magic-numbers': 'off',
    'no-misleading-character-class': 'off',
    'no-multi-assign': ['error'],
    'no-multi-str': ['error'],
    'no-negated-condition': ['error'],
    'no-nested-ternary': 'off',
    'no-new': ['error'],
    'no-new-func': ['error'],
    'no-new-object': ['error'],
    'no-new-symbol': ['error'],
    'no-new-wrappers': ['error'],
    'no-nonoctal-decimal-escape': ['error'],
    'no-obj-calls': ['error'],
    'no-octal': ['error'],
    'no-octal-escape': ['error'],
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-promise-executor-return': 'off',
    'no-proto': ['error'],
    'no-prototype-builtins': 'off',
    'no-redeclare': ['error'],
    'no-regex-spaces': ['error'],
    'no-restricted-exports': 'off',
    'no-restricted-globals': ['error', 'event', 'fdescribe'],
    'no-restricted-imports': 'off',
    'no-restricted-properties': 'off',
    'no-restricted-syntax': ['error', 'WithStatement'],
    'no-return-assign': ['error'],
    'no-return-await': ['error'],
    'no-script-url': ['error'],
    'no-self-assign': ['error'],
    'no-self-compare': ['error'],
    'no-sequences': ['error'],
    'no-setter-return': ['error'],
    'no-shadow': ['error'],
    'no-shadow-restricted-names': ['error'],
    'no-sparse-arrays': ['error'],
    'no-template-curly-in-string': ['error'],
    'no-ternary': 'off',
    'no-this-before-super': ['error'],
    'no-throw-literal': ['error'],
    'no-undef': ['error'],
    'no-undef-init': ['error'],
    'no-undefined': 'off',
    'no-underscore-dangle': 'off',
    'no-unmodified-loop-condition': ['error'],
    'no-unneeded-ternary': ['error'],
    'no-unreachable': ['error'],
    'no-unreachable-loop': ['error'],
    'no-unsafe-finally': ['error'],
    'no-unsafe-negation': ['error'],
    'no-unsafe-optional-chaining': ['error'],
    'no-unused-expressions': 'off',
    'no-unused-labels': ['error'],
    'no-unused-private-class-members': ['error'],
    'no-unused-vars': [
      'error',
      {
        args: 'after-used',
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        varsIgnorePattern: '^ignored',
      },
    ],
    'no-use-before-define': ['error', 'nofunc'],
    'no-useless-backreference': ['error'],
    'no-useless-call': ['error'],
    'no-useless-catch': ['error'],
    'no-useless-computed-key': ['error'],
    'no-useless-concat': ['error'],
    'no-useless-constructor': ['error'],
    'no-useless-escape': ['error'],
    'no-useless-rename': ['error'],
    'no-useless-return': ['error'],
    'no-var': ['error'],
    'no-void': 'off',
    'no-warning-comments': [
      'error',
      { location: 'anywhere', terms: ['fixme'] },
    ],
    'no-with': 'off',
    'object-shorthand': ['error', 'properties'],
    'one-var': ['error', { initialized: 'never', uninitialized: 'always' }],
    'operator-assignment': 'off',
    'padding-line-between-statements': 'off',
    'prefer-arrow-callback': [
      'error',
      { allowNamedFunctions: true, allowUnboundThis: true },
    ],
    'prefer-const': ['error'],
    'prefer-destructuring': 'off',
    'prefer-exponentiation-operator': ['warn'],
    'prefer-named-capture-group': 'off',
    'prefer-numeric-literals': ['error'],
    'prefer-object-has-own': ['error'],
    'prefer-object-spread': ['warn'],
    'prefer-promise-reject-errors': 'off',
    'prefer-regex-literals': 'off',
    'prefer-rest-params': ['error'],
    'prefer-spread': ['error'],
    'prefer-template': ['error'],
    radix: ['error'],
    'require-atomic-updates': 'off',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'require-yield': ['error'],
    'sort-imports': 'off',
    'sort-keys': 'off',
    'sort-vars': 'off',
    'spaced-comment': 'off',
    strict: ['error'],
    'symbol-description': ['error'],
    'use-isnan': ['error'],
    'valid-typeof': ['error'],
    'vars-on-top': ['error'],
    yoda: ['error'],
    'array-bracket-newline': 'off',
    'array-bracket-spacing': 'off',
    'array-element-newline': 'off',
    'arrow-parens': 'off',
    'arrow-spacing': 'off',
    'block-spacing': 'off',
    'brace-style': 'off',
    'comma-dangle': 'off',
    'comma-spacing': 'off',
    'comma-style': 'off',
    'computed-property-spacing': 'off',
    'dot-location': 'off',
    'eol-last': 'off',
    'func-call-spacing': 'off',
    'function-call-argument-newline': 'off',
    'function-paren-newline': 'off',
    'generator-star-spacing': 'off',
    'implicit-arrow-linebreak': 'off',
    indent: 'off',
    'jsx-quotes': 'off',
    'key-spacing': 'off',
    'keyword-spacing': 'off',
    'linebreak-style': 'off',
    'lines-around-comment': 'off',
    'max-len': 'off',
    'multiline-ternary': 'off',
    'new-parens': 'off',
    'newline-per-chained-call': 'off',
    'no-confusing-arrow': 'off',
    'no-extra-parens': 'off',
    'no-extra-semi': 'off',
    'no-floating-decimal': 'off',
    'no-mixed-operators': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'no-multi-spaces': 'off',
    'no-multiple-empty-lines': 'off',
    'no-tabs': 'off',
    'no-trailing-spaces': 'off',
    'no-unexpected-multiline': 'off',
    'no-whitespace-before-property': 'off',
    'nonblock-statement-body-position': 'off',
    'object-curly-newline': 'off',
    'object-curly-spacing': 'off',
    'object-property-newline': 'off',
    'one-var-declaration-per-line': 'off',
    'operator-linebreak': 'off',
    'padded-blocks': 'off',
    'quote-props': 'off',
    quotes: 'off',
    'rest-spread-spacing': 'off',
    semi: 'off',
    'semi-spacing': 'off',
    'semi-style': 'off',
    'space-before-blocks': 'off',
    'space-before-function-paren': 'off',
    'space-in-parens': 'off',
    'space-infix-ops': 'off',
    'space-unary-ops': 'off',
    'switch-colon-spacing': 'off',
    'template-curly-spacing': 'off',
    'template-tag-spacing': 'off',
    'unicode-bom': 'off',
    'wrap-iife': 'off',
    'wrap-regex': 'off',
    'yield-star-spacing': 'off',
  } satisfies Eslint,
} satisfies FlatConfigItem;
