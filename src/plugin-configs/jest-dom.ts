import jestDomPlugin from 'eslint-plugin-jest-dom';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import type { JestDom } from '../types/jest-dom/index.js';

const rules = {
  'jest-dom/prefer-checked': ['error'],
  'jest-dom/prefer-empty': ['error'],
  'jest-dom/prefer-enabled-disabled': ['error'],
  'jest-dom/prefer-focus': ['error'],
  'jest-dom/prefer-in-document': ['error'],
  'jest-dom/prefer-required': ['error'],
  'jest-dom/prefer-to-have-attribute': ['error'],
  'jest-dom/prefer-to-have-class': ['error'],
  'jest-dom/prefer-to-have-style': ['error'],
  'jest-dom/prefer-to-have-text-content': ['error'],
  'jest-dom/prefer-to-have-value': ['error'],
} satisfies JestDom;

export const config = {
  files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
  plugins: { 'jest-dom': jestDomPlugin },
  rules,
} satisfies FlatConfigItem;
