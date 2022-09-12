import { Linter } from 'eslint';
import '../eslint-patch/modern-module-resolution';

const config: Linter.Config = {
  plugins: ['wc'],
  parserOptions: {
    sourceType: 'module',
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
};

export = config;
