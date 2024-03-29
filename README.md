<h1 align="center">@zmrl/eslint-config</h1>

My ever-evolving eslint configuration.

This library was inspired by other shared configurations
from from the community:

- [eslint-config-kentcdodds](https://github.com/kentcdodds/eslint-config-kentcdodds)
- [eslint-config-brad](https://github.com/bradzacher/eslint-config-brad)

ESLint offers a new
[flat configuration format](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new).
While this config format isn't fully polished by the eslint team, I haven't
found any issues while using it in my projects. The configs in this library
are exported as flat config.

## Install

Install with your favorite package manager

```shell
pnpm add -D @zmrl/eslint-config
```

## Include

Import and include the config

```js
import config from '@zmrl/eslint-config';

export default [config];
```

This package also exports a number of useful ESLint configurations
for different types of projects. Check `exports` in `package.json`
for a complete list. They are also available as a named import from the
root package.
