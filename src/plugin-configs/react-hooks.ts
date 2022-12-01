import reactHooksPlugin from 'eslint-plugin-react-hooks';
import type { FlatConfigItem } from '../../types/flat-eslint-config.js';
import type { ReactHooks } from '../types/react-hooks/index.js';

export const config = {
  plugins: { 'react-hooks': reactHooksPlugin },
  rules: {
    'react-hooks/exhaustive-deps': ['warn'],
    'react-hooks/rules-of-hooks': ['error'],
  } satisfies ReactHooks,
} satisfies FlatConfigItem;
