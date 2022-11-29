import jestDomPlugin from 'eslint-plugin-jest-dom';
import type { JestDom } from '../types/jest-dom/index.js';

export const plugins = { 'jest-dom': jestDomPlugin };

export const rules = {
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
