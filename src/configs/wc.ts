import type { TSESLint } from '@typescript-eslint/utils';
import eslintPluginWebComponents from 'eslint-plugin-wc';
import { defineConfig } from '../lib/config.js';

export default defineConfig({
  plugins: {
    wc: eslintPluginWebComponents as TSESLint.Linter.Plugin,
  },
  rules: {
    'wc/no-constructor-attributes': 'error',
    'wc/no-invalid-element-name': 'error',
    'wc/no-self-class': 'error',
    'wc/attach-shadow-constructor': 'error',
    'wc/guard-super-call': 'error',
    'wc/no-closed-shadow-root': 'error',
    'wc/no-constructor-params': 'error',
    'wc/no-typos': 'error',
    'wc/require-listener-teardown': 'error',
  },
});
