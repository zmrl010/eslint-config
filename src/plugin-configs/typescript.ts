import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import type {
  FlatConfigItem,
  LanguageOptions,
} from '../../types/flat-eslint-config.js';
import { resolveFirstExisting } from '../lib/path.js';
import type { TypescriptEslint } from '../types/@typescript-eslint/index.js';
import type { Eslint } from '../types/eslint/index.js';

const projectTsConfig = resolveFirstExisting(
  'tsconfig.json',
  'types/tsconfig.json'
);

const coreTSRuleSwitches = {
  'constructor-super': 'off', // ts(2335) & ts(2377)
  'getter-return': 'off', // ts(2378)
  'no-const-assign': 'off', // ts(2588)
  'no-dupe-args': 'off', // ts(2300)
  'no-dupe-keys': 'off', // ts(1117)
  'no-func-assign': 'off', // ts(2539)
  'no-import-assign': 'off', // ts(2539) & ts(2540)
  'no-new-symbol': 'off', // ts(2588)
  'no-obj-calls': 'off', // ts(2349)
  'no-setter-return': 'off', // ts(2408)
  'no-this-before-super': 'off', // ts(2376)
  'no-undef': 'off', // ts(2304)
  'no-unreachable': 'off', // ts(7027)
  'no-unsafe-negation': 'off', // ts(2365) & ts(2360) & ts(2358)
  'valid-typeof': 'off', // ts(2367)

  'consistent-return': 'off',
  'no-var': ['error'],
  'prefer-const': ['error'],
  'prefer-rest-params': ['error'],
  'prefer-spread': ['error'],

  'default-param-last': 'off',
  '@typescript-eslint/default-param-last': 'off',

  'dot-notation': 'off',
  '@typescript-eslint/dot-notation': ['error'],

  'init-declarations': 'off',
  '@typescript-eslint/init-declarations': 'off',

  'lines-between-class-members': 'off',
  '@typescript-eslint/lines-between-class-members': 'off',

  'no-array-constructor': 'off',
  '@typescript-eslint/no-array-constructor': ['error'],

  'no-dupe-class-members': 'off',
  '@typescript-eslint/no-dupe-class-members': 'off', // ts(2393) & ts(2300)

  'no-empty-function': 'off',
  '@typescript-eslint/no-empty-function': 'off',

  'no-implied-eval': ['error'],
  '@typescript-eslint/no-implied-eval': ['error'],

  'no-invalid-this': 'off',
  '@typescript-eslint/no-invalid-this': ['error'],

  'no-loop-func': 'off',
  '@typescript-eslint/no-loop-func': ['error'],

  'no-loss-of-precision': 'off',
  '@typescript-eslint/no-loss-of-precision': ['error'],

  'no-magic-numbers': 'off',
  '@typescript-eslint/no-magic-numbers': 'off',

  'no-redeclare': 'off',
  '@typescript-eslint/no-redeclare': 'off', // ts(2451)

  'no-return-await': 'off',
  '@typescript-eslint/return-await': ['error'],

  'no-shadow': 'off',
  '@typescript-eslint/no-shadow': ['error'],

  'no-throw-literal': 'off',
  '@typescript-eslint/no-throw-literal': ['error'],

  'no-use-before-define': 'off',
  '@typescript-eslint/no-use-before-define': ['error', 'nofunc'],

  'no-unused-expressions': 'off',
  '@typescript-eslint/no-unused-expressions': 'off',

  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': [
    'error',
    {
      args: 'after-used',
      argsIgnorePattern: '^_',
      ignoreRestSiblings: true,
      varsIgnorePattern: '^ignored',
    },
  ],

  'no-useless-constructor': 'off',
  '@typescript-eslint/no-useless-constructor': ['error'],
} satisfies Partial<TypescriptEslint> & Partial<Eslint>;

const rules = {
  ...coreTSRuleSwitches,
  '@typescript-eslint/adjacent-overload-signatures': ['error'],
  '@typescript-eslint/array-type': 'off',
  '@typescript-eslint/await-thenable': ['error'],
  '@typescript-eslint/ban-ts-comment': ['error'],
  '@typescript-eslint/ban-tslint-comment': ['error'],
  '@typescript-eslint/ban-types': 'off',
  '@typescript-eslint/class-literal-property-style': 'off',
  '@typescript-eslint/consistent-indexed-object-style': 'off',
  '@typescript-eslint/consistent-type-assertions': 'off',
  '@typescript-eslint/consistent-type-definitions': 'off',
  '@typescript-eslint/consistent-type-imports': 'off',
  '@typescript-eslint/explicit-function-return-type': 'off',
  '@typescript-eslint/explicit-module-boundary-types': 'off',
  '@typescript-eslint/member-delimiter-style': 'off',
  '@typescript-eslint/member-ordering': 'off',
  '@typescript-eslint/method-signature-style': 'off',
  '@typescript-eslint/naming-convention': 'off',
  '@typescript-eslint/no-base-to-string': ['warn'],
  '@typescript-eslint/no-confusing-non-null-assertion': 'off',
  '@typescript-eslint/no-confusing-void-expression': ['error'],
  '@typescript-eslint/no-dynamic-delete': ['error'],
  '@typescript-eslint/no-empty-interface': ['error'],
  '@typescript-eslint/no-explicit-any': ['error'],
  '@typescript-eslint/no-extra-non-null-assertion': ['error'],
  '@typescript-eslint/no-extraneous-class': ['error'],
  '@typescript-eslint/no-floating-promises': ['warn'],
  '@typescript-eslint/no-for-in-array': ['error'],
  '@typescript-eslint/no-inferrable-types': ['error'],
  '@typescript-eslint/no-invalid-void-type': ['warn'],
  '@typescript-eslint/no-misused-new': ['error'],
  '@typescript-eslint/no-misused-promises': [
    'warn',
    { checksVoidReturn: false },
  ],
  '@typescript-eslint/no-namespace': ['error'],
  '@typescript-eslint/no-non-null-asserted-optional-chain': ['error'],
  '@typescript-eslint/no-non-null-assertion': ['error'],
  '@typescript-eslint/no-require-imports': 'off',
  '@typescript-eslint/no-this-alias': ['error'],
  '@typescript-eslint/no-type-alias': 'off',
  '@typescript-eslint/no-unnecessary-boolean-literal-compare': ['warn'],
  '@typescript-eslint/no-unnecessary-condition': ['error'],
  '@typescript-eslint/no-unnecessary-qualifier': ['warn'],
  '@typescript-eslint/no-unnecessary-type-arguments': ['warn'],
  '@typescript-eslint/no-unnecessary-type-assertion': ['error'],
  '@typescript-eslint/no-unnecessary-type-constraint': ['error'],
  '@typescript-eslint/no-unsafe-argument': ['error'],
  '@typescript-eslint/no-unsafe-assignment': ['error'],
  '@typescript-eslint/no-unsafe-call': ['error'],
  '@typescript-eslint/no-unsafe-member-access': ['error'],
  '@typescript-eslint/no-unsafe-return': ['error'],
  '@typescript-eslint/no-var-requires': ['error'],
  '@typescript-eslint/non-nullable-type-assertion-style': 'off',
  '@typescript-eslint/prefer-as-const': ['error'],
  '@typescript-eslint/prefer-enum-initializers': ['error'],
  '@typescript-eslint/prefer-for-of': ['warn'],
  '@typescript-eslint/prefer-function-type': 'off',
  '@typescript-eslint/prefer-includes': ['error'],
  '@typescript-eslint/prefer-literal-enum-member': ['error'],
  '@typescript-eslint/prefer-namespace-keyword': ['error'],
  '@typescript-eslint/prefer-nullish-coalescing': ['error'],
  '@typescript-eslint/prefer-optional-chain': ['error'],
  '@typescript-eslint/prefer-readonly': 'off',
  '@typescript-eslint/prefer-readonly-parameter-types': 'off',
  '@typescript-eslint/prefer-reduce-type-parameter': ['warn'],
  '@typescript-eslint/prefer-regexp-exec': 'off',
  '@typescript-eslint/prefer-string-starts-ends-with': ['error'],
  '@typescript-eslint/prefer-ts-expect-error': ['error'],
  '@typescript-eslint/promise-function-async': 'off',
  '@typescript-eslint/require-array-sort-compare': 'off',
  '@typescript-eslint/require-await': 'off',
  '@typescript-eslint/restrict-plus-operands': ['error'],
  '@typescript-eslint/restrict-template-expressions': 'off',
  '@typescript-eslint/strict-boolean-expressions': 'off',
  '@typescript-eslint/switch-exhaustiveness-check': ['error'],
  '@typescript-eslint/triple-slash-reference': ['error'],
  '@typescript-eslint/typedef': 'off',
  '@typescript-eslint/unbound-method': ['error'],
  '@typescript-eslint/unified-signatures': ['warn'],
  /**
   * TODO
   */
  '@typescript-eslint/brace-style': 'off',
  '@typescript-eslint/comma-dangle': 'off',
  '@typescript-eslint/comma-spacing': 'off',
  '@typescript-eslint/consistent-generic-constructors': 'off',
  '@typescript-eslint/consistent-type-exports': 'off',
  '@typescript-eslint/explicit-member-accessibility': 'off',
  '@typescript-eslint/func-call-spacing': 'off',
  '@typescript-eslint/indent': 'off',
  '@typescript-eslint/keyword-spacing': 'off',
  '@typescript-eslint/no-duplicate-enum-values': 'off',
  '@typescript-eslint/no-extra-parens': 'off',
  '@typescript-eslint/no-extra-semi': 'off',
  '@typescript-eslint/no-meaningless-void-operator': 'off',
  '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'off',
  '@typescript-eslint/no-redundant-type-constituents': 'off',
  '@typescript-eslint/no-restricted-imports': 'off',
  '@typescript-eslint/no-unsafe-declaration-merging': 'off',
  '@typescript-eslint/no-useless-empty-export': 'off',
  '@typescript-eslint/object-curly-spacing': 'off',
  '@typescript-eslint/padding-line-between-statements': 'off',
  '@typescript-eslint/parameter-properties': 'off',
  '@typescript-eslint/prefer-return-this-type': 'off',
  '@typescript-eslint/quotes': 'off',
  '@typescript-eslint/semi': 'off',
  '@typescript-eslint/sort-type-constituents': 'off',
  '@typescript-eslint/space-before-blocks': 'off',
  '@typescript-eslint/space-before-function-paren': 'off',
  '@typescript-eslint/space-infix-ops': 'off',
  '@typescript-eslint/type-annotation-spacing': 'off',
} satisfies TypescriptEslint & Partial<Eslint>;

const languageOptions: LanguageOptions = {
  parser: tsParser,
  parserOptions: {
    project: projectTsConfig,
  },
};

export const config = {
  plugins: { '@typescript-eslint': typescriptPlugin },
  rules,
  files: ['**/*.ts?(x)'],
  languageOptions,
} satisfies FlatConfigItem;
