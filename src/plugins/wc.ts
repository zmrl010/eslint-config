import wcPlugin from 'eslint-plugin-wc';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import type { Wc } from '../types/wc/index.js';

export const config = {
  plugins: { wc: wcPlugin },
  rules: {
    'wc/no-constructor-attributes': ['error'],
    'wc/no-invalid-element-name': ['error'],
    'wc/no-self-class': ['error'],
    'wc/attach-shadow-constructor': ['error'],
    'wc/guard-super-call': ['error'],
    'wc/no-closed-shadow-root': ['error'],
    'wc/no-constructor-params': ['error'],
    'wc/no-typos': ['error'],
    'wc/require-listener-teardown': ['error'],
  } satisfies Wc,
} satisfies FlatConfigItem;
