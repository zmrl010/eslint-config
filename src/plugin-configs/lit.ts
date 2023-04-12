import litPlugin from 'eslint-plugin-lit';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import type { Lit } from '../types/lit/index.js';

export const config = {
  plugins: { lit: litPlugin },
  rules: {
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

    // TODO research these more
    'lit/ban-attributes': 'off',
    'lit/no-native-attributes': 'off',
    'lit/no-this-assign-in-render': 'off',
    'lit/prefer-nothing': 'off',
    'lit/value-after-constraints': 'off',
  } satisfies Lit,
} satisfies FlatConfigItem;
