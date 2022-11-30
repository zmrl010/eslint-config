import prettierConfig from 'eslint-config-prettier';
import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { ESLint, Import, TypeScript } from '../plugin-configs/index.js';

const config: FlatConfig = [
  prettierConfig,
  Import.config,
  ESLint.config,
  TypeScript.config,
  Import.typescriptConfig,
];

export default config;
