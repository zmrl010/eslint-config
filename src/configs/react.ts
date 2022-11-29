import type { FlatConfig } from '../../types/flat-eslint-config.js';
import { ReactConfig, ReactHooksConfig } from '../plugin-configs/index.js';

const config: FlatConfig = [
  {
    plugins: ReactConfig.plugins,
    rules: ReactConfig.rules,
  },
  {
    plugins: ReactHooksConfig.plugins,
    rules: ReactHooksConfig.rules,
  },
  {
    files: ['**/*.ts?(x)'],
    rules: ReactConfig.typescriptRules,
  },
  {
    files: ['**/__tests__/**/*.+(js|ts)?(x)', '**/*.{spec,test}.+(js|ts)?(x)'],
    rules: ReactConfig.testRules,
  },
];

export default config;
