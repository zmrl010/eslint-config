<h1 align="center">@zmrl/eslint-config</h1>

An evolving eslint configuration for my projects.

_Inspired by [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds)_

## Install

This package can be installed with npm

```shell
npm i -D @zmrl/eslint-config
```

There is a
[long-standing eslint issue](https://github.com/eslint/eslint/issues/3458)
where shareable eslint configs like this one cannot install plugins for you.
You can either install them manually or you can use
[@rushstack/eslint-patch](https://www.npmjs.com/package/@rushstack/eslint-patch)
as a workable hack to use this config's already installed dependencies.

This package exports the patch under the
`patch/modern-module-resolution` subpath.
Place it at the top of .eslintrc.js

```js
require('@zmrl/eslint-config/patch/modern-module-resolution');
```

## Extend

Add package scope to extends in your eslint config:

```js
require('@zmrl/eslint-config/patch/modern-module-resolution');

module.exports = {
  extends: ['@zmrl'],
};
```
