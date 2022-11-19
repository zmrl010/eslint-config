import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import { defineConfig } from '../lib/config.js';
import { resolveFirstExisting } from '../lib/path.js';

const projectTsConfig = resolveFirstExisting(
  'tsconfig.json',
  'types/tsconfig.json'
);

export default defineConfig({
  files: ['**/*.ts?(x)'],
  languageOptions: {
    parser: tsParser,
    parserOptions: {
      project: projectTsConfig,
    },
  },
  plugins: {
    '@typescript-eslint': tsPlugin,
  },
});
