import { Linter } from 'eslint';
import '../eslint-patch/modern-module-resolution';

const config: Linter.Config = {
  extends: ['./wc'],
  plugins: ['lit'],

  rules: {
    'lit/attribute-value-entities': 'error',
    'lit/binding-positions': 'error',
    'lit/no-duplicate-template-bindings': 'error',
    'lit/no-invalid-html': 'error',
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-property-change-update': 'error',

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
  },
};

export = config;
