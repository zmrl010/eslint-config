import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { TypeScriptConfig } from '../plugin-configs/index.js';

const config: FlatConfig = [
  {
    files: TypeScriptConfig.files,
    languageOptions: TypeScriptConfig.languageOptions,
    plugins: TypeScriptConfig.plugins,
    rules: TypeScriptConfig.rules,
  },
];

export default config;
