import mainConfig from '@zmrl/eslint-config';

/**
 * @type {import('./types/flat-eslint-config').FlatConfigArray}
 */
export default [
  {
    files: ['types', 'src'],
    ignores: ['node_modules', 'coverage', 'dist', 'pnpm-lock.yaml'],
  },
  mainConfig,
];
