import prettierConfig from 'eslint-config-prettier';
import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { ESLintConfig, TypeScriptConfig } from '../plugin-configs/index.js';
import importConfig from './import.js';

const config: FlatConfig = [
  prettierConfig,
  ...importConfig,
  {
    rules: ESLintConfig.rules,
  },
  {
    files: TypeScriptConfig.files,
    languageOptions: TypeScriptConfig.languageOptions,
    plugins: TypeScriptConfig.plugins,
    rules: TypeScriptConfig.rules,
  },
];

export default config;
