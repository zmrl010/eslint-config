import { Main } from '@zmrl/eslint-config';

/**
 * @type {import('./types/flat-eslint-config').FlatConfig}
 */
export default [
  {
    ignores: [
      'node_modules',
      'coverage',
      'dist',
      'pnpm-lock.yaml',
      'src/types',
    ],
  },
  ...Main,
];
