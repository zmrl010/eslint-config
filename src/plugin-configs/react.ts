import reactPlugin from 'eslint-plugin-react';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import { isDependencyListed } from '../lib/dependency.js';
import { readPackage } from '../lib/read-package.js';
import type { React } from '../types/react/index.js';

const packageJson = readPackage();
const propTypesValue: ['error'] | 'off' = isDependencyListed(
  packageJson,
  'prop-types'
)
  ? ['error']
  : 'off';

const plugins = { react: reactPlugin };

export const config = {
  plugins,
  rules: {
    'react/boolean-prop-naming': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/display-name': ['error', { ignoreTranspilerName: false }],
    'react/forbid-component-props': 'off',
    'react/forbid-dom-props': 'off',
    'react/forbid-elements': 'off',
    'react/forbid-prop-types': 'off',
    'react/function-component-definition': 'off',
    'react/hook-use-state': 'off',
    'react/iframe-missing-sandbox': ['warn'],
    'react/jsx-boolean-value': 'off',
    'react/jsx-curly-brace-presence': [
      'warn',
      { children: 'ignore', props: 'never' },
    ],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-fragments': 'off',
    'react/jsx-handler-names': 'off',
    'react/jsx-key': ['error'],
    'react/jsx-max-depth': 'off',
    'react/jsx-newline': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': ['error'],
    'react/jsx-no-constructed-context-values': 'off',
    'react/jsx-no-duplicate-props': ['error'],
    'react/jsx-no-literals': 'off',
    'react/jsx-no-leaked-render': ['error'],
    'react/jsx-no-script-url': ['error'],
    'react/jsx-no-target-blank': ['error'],
    'react/jsx-no-undef': ['error'],
    'react/jsx-no-useless-fragment': ['warn'],
    'react/jsx-pascal-case': ['error'],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'off',
    'react/jsx-uses-vars': ['error'],
    'react/no-access-state-in-setstate': ['error'],
    'react/no-adjacent-inline-elements': 'off',
    'react/no-array-index-key': 'off',
    'react/no-arrow-function-lifecycle': ['error'],
    'react/no-children-prop': 'off',
    'react/no-danger': 'off',
    'react/no-danger-with-children': ['error'],
    'react/no-deprecated': ['error'],
    'react/no-did-mount-set-state': ['error'],
    'react/no-did-update-set-state': ['error'],
    'react/no-direct-mutation-state': ['error'],
    'react/no-find-dom-node': ['error'],
    'react/no-invalid-html-attribute': ['error'],
    'react/no-is-mounted': ['error'],
    'react/no-multi-comp': 'off',
    'react/no-namespace': ['error'],
    'react/no-redundant-should-component-update': ['error'],
    'react/no-render-return-value': ['error'],
    'react/no-set-state': 'off',
    'react/no-string-refs': ['error'],
    'react/no-this-in-sfc': ['error'],
    'react/no-typos': ['error'],
    'react/no-unescaped-entities': ['warn'],
    'react/no-unknown-property': ['error'],
    'react/no-unsafe': ['warn'],
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    'react/no-unused-class-component-methods': ['error'],
    'react/no-unused-state': ['error'],
    'react/no-will-update-set-state': ['error'],
    'react/prefer-es6-class': 'off',
    'react/prefer-exact-props': 'off',
    'react/prefer-read-only-props': 'off',
    'react/prefer-stateless-function': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/require-optimization': 'off',
    'react/require-render-return': ['error'],
    'react/self-closing-comp': ['error'],
    'react/sort-comp': 'off',
    'react/sort-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',
    'react/style-prop-object': ['error'],
    'react/void-dom-elements-no-children': ['error'],
    'react/prop-types': propTypesValue,
    'react/default-props-match-prop-types': propTypesValue,
    'react/forbid-foreign-prop-types': propTypesValue,
    'react/no-unused-prop-types': propTypesValue,
    /**
     * ** TODO **
     */
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-curly-spacing': 'off',
    'react/jsx-curly-newline': 'off',
    'react/jsx-equals-spacing': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-indent': 'off',
    'react/jsx-indent-props': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-multi-spaces': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/jsx-wrap-multilines': 'off',
  } satisfies React,
} satisfies FlatConfigItem;

export const typescriptConfig = {
  plugins,
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
  } satisfies Partial<React>,
} satisfies FlatConfigItem;

export const testConfig = {
  files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
  plugins,
  rules: {
    'react/display-name': 'off', // we don't need a display name in test files
  } satisfies Partial<React>,
} satisfies FlatConfigItem;
