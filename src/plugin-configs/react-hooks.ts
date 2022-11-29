import reactHooksPlugin from 'eslint-plugin-react-hooks';
import type { ReactHooks } from '../types/react-hooks/index.js';

export const plugins = { 'react-hooks': reactHooksPlugin };

export const rules = {
  'react-hooks/exhaustive-deps': ['warn'],
  'react-hooks/rules-of-hooks': ['error'],
} satisfies ReactHooks;
