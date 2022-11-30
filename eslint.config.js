import config from '@zmrl/eslint-config';

/**
 * @type {import('./types/flat-eslint-config').FlatConfig}
 */
export default [
  {
    files: ['types', 'src'],
    ignores: ['node_modules', 'coverage', 'dist', 'pnpm-lock.yaml'],
  },
  ...config,
];
