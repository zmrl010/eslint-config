import { TSESLint } from '@typescript-eslint/utils';
import litA11y from 'eslint-plugin-lit-a11y';
import { defineConfig } from '../lib/config.js';

export default defineConfig({
  plugins: {
    'lit-a11y': litA11y as TSESLint.Linter.Plugin,
  },
  rules: {
    'lit-a11y/accessible-emoji': 'off',
    'lit-a11y/alt-text': 'error',
    'lit-a11y/anchor-has-content': 'error',
    'lit-a11y/anchor-is-valid': 'error',
    'lit-a11y/aria-activedescendant-has-tabindex': 'error',
    'lit-a11y/aria-attr-valid-value': 'error',
    'lit-a11y/aria-attrs': 'error',
    'lit-a11y/aria-role': 'error',
    'lit-a11y/aria-unsupported-elements': 'error',
    'lit-a11y/autocomplete-valid': 'error',
    'lit-a11y/click-events-have-key-events': 'error',
    'lit-a11y/heading-has-content': 'error',
    'lit-a11y/iframe-title': 'error',
    'lit-a11y/img-redundant-alt': 'error',
    'lit-a11y/mouse-events-have-key-events': 'error',
    'lit-a11y/no-access-key': 'error',
    'lit-a11y/no-autofocus': 'error',
    'lit-a11y/no-distracting-elements': 'error',
    'lit-a11y/no-invalid-change-handler': 'off',
    'lit-a11y/no-redundant-role': 'error',
    'lit-a11y/role-has-required-aria-attrs': 'error',
    'lit-a11y/role-supports-aria-attr': 'error',
    'lit-a11y/scope': 'error',
    'lit-a11y/tabindex-no-positive': 'error',
    'lit-a11y/valid-lang': 'off',
  },
});
