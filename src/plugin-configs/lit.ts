import litPlugin from 'eslint-plugin-lit';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import type { Lit } from '../types/lit/index.js';

const plugins = { lit: litPlugin };

const rules = {
  'lit/attribute-value-entities': ['error'],
  'lit/binding-positions': ['error'],
  'lit/no-duplicate-template-bindings': ['error'],
  'lit/no-invalid-html': ['error'],
  'lit/no-legacy-template-syntax': ['error'],
  'lit/no-property-change-update': ['error'],

  'lit/no-invalid-escape-sequences': 'off',
  'lit/no-legacy-imports': 'off',
  'lit/no-private-properties': 'off',
  'lit/no-template-arrow': 'off',
  'lit/no-template-bind': 'off',
  'lit/no-template-map': 'off',
  'lit/no-useless-template-literals': 'off',
  'lit/no-value-attribute': 'off',
  'lit/prefer-static-styles': 'off',
  'lit/quoted-expressions': 'off',
} satisfies Lit;

export const config = {
  plugins,
  rules,
} satisfies FlatConfigItem;
