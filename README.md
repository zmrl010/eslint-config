<h1 align="center">@zmrl/eslint-config</h1>

An evolving eslint configuration for my projects.

_Inspired by [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds)_

## Install

This package can be installed with npm

```shell
npm add -D @zmrl/eslint-config
# or
yarn add -D @zmrl/eslint-config
# or
pnpm add -D @zmrl/eslint-config
```

## Extend

Add package scope to extends in your eslint config:

```js
module.exports = {
  extends: ['@zmrl'],
};
```

The base config includes many rules for JavaScript and TypeScript,
but this config also exports several sub-configs for things like react
and jest. Extend sub-configs as needed. Note that `import` config is
extended by the default exported config.

```js
module.exports = {
  extends: [
    '@zmrl/eslint-config/import',
    '@zmrl/eslint-config/react',
    '@zmrl/eslint-config/jest',
    '@zmrl/eslint-config/jsx-a11y',
  ],
};
```

## Included Patch

There is a
[long-standing eslint issue](https://github.com/eslint/eslint/issues/3458)
requesting shareable eslint configs like this one to be able to install
plugins for you as a part of its own dependencies. Since this is not currently
possible, there is a
[patch](https://www.npmjs.com/package/@rushstack/eslint-patch)
that can be used as a workaround.

This config automatically includes the patch for every configuration.
That means you only have to install eslint plugins that are not included
with this config.
