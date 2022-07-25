module.exports = {
  extends: [
    '../dist/react.js',
    '../dist/jsx-a11y.js',
    '../dist/index.js',
    '../dist/jest.js',
  ],
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: require.resolve('./.tsconfig.json'),
      },
    },
  ],
};
