# [3.3.0](https://github.com/zmrl010/eslint-config/compare/v3.2.0...v3.3.0) (2022-09-12)


### Features

* use lit and wc plugins for web components ([fe321fe](https://github.com/zmrl010/eslint-config/commit/fe321fe3537a6487ee1178899e60c9bc9eca20c9))

# [3.2.0](https://github.com/zmrl010/eslint-config/compare/v3.1.8...v3.2.0) (2022-08-17)


### Features

* use workspace projects for accurate tests ([04304b2](https://github.com/zmrl010/eslint-config/commit/04304b277bc8fc7ca8779ad18acac106a7921845))

## [3.1.8](https://github.com/zmrl010/eslint-config/compare/v3.1.7...v3.1.8) (2022-08-16)


### Bug Fixes

* range comparison bug with testing library ([73899ec](https://github.com/zmrl010/eslint-config/commit/73899ec8a4b5b7973ad70653f93022afa218160f))

## [3.1.7](https://github.com/zmrl010/eslint-config/compare/v3.1.6...v3.1.7) (2022-08-16)


### Bug Fixes

* convert jest version to number ([6da36a5](https://github.com/zmrl010/eslint-config/commit/6da36a5964546ab7550798ac7d69edcd65369e0e))

## [3.1.6](https://github.com/zmrl010/eslint-config/compare/v3.1.5...v3.1.6) (2022-08-16)


### Bug Fixes

* resolve jest version using getVersion ([7039c64](https://github.com/zmrl010/eslint-config/commit/7039c64f615fd4b974ab7abbbe02689c898fb4b4))

## [3.1.5](https://github.com/zmrl010/eslint-config/compare/v3.1.4...v3.1.5) (2022-08-16)


### Bug Fixes

* add package.json to exports ([2bd2ac6](https://github.com/zmrl010/eslint-config/commit/2bd2ac6bec4bd0840d721e509216b46a171b1b96))

## [3.1.4](https://github.com/zmrl010/eslint-config/compare/v3.1.3...v3.1.4) (2022-08-16)


### Bug Fixes

* module import issue ([76b1922](https://github.com/zmrl010/eslint-config/commit/76b1922a2cda18f9ddb5ecffb7fd90a1c3b9cccb))

## [3.1.3](https://github.com/zmrl010/eslint-config/compare/v3.1.2...v3.1.3) (2022-08-16)


### Bug Fixes

* correct module extends ([3c14a80](https://github.com/zmrl010/eslint-config/commit/3c14a8017dece50a2b615b4ae3207e7ee2486bfc))

## [3.1.2](https://github.com/zmrl010/eslint-config/compare/v3.1.1...v3.1.2) (2022-08-16)


### Bug Fixes

* correct exports ([f7d28ea](https://github.com/zmrl010/eslint-config/commit/f7d28eaac4e1fde33139d8cd3336d6cca78baf5e))
* main project file ([4789ba6](https://github.com/zmrl010/eslint-config/commit/4789ba67fcfb96d84cf3c78fdda00019f2398c53))

## [3.1.1](https://github.com/zmrl010/eslint-config/compare/v3.1.0...v3.1.1) (2022-08-15)


### Bug Fixes

* account for user-event being async in 14+ ([47e8470](https://github.com/zmrl010/eslint-config/commit/47e847086014e95696dcf707592e69278439e756))

# [3.1.0](https://github.com/zmrl010/eslint-config/compare/v3.0.2...v3.1.0) (2022-08-08)


### Features

* include eslint patch import for every config ([be58cc2](https://github.com/zmrl010/eslint-config/commit/be58cc284078132f690d81bdbf6618b59f23d57b))

## [3.0.2](https://github.com/zmrl010/eslint-config/compare/v3.0.1...v3.0.2) (2022-08-08)


### Bug Fixes

* fix filepath exports ([0664016](https://github.com/zmrl010/eslint-config/commit/0664016434f37a35093e81455f8c7a630615a735))

## [3.0.1](https://github.com/zmrl010/eslint-config/compare/v3.0.0...v3.0.1) (2022-07-25)


### Bug Fixes

* escape jsx-a11y test command ([95baf0e](https://github.com/zmrl010/eslint-config/commit/95baf0e2b8b0b247f83a0629457fcdb08bea2897))
* **react:** include react/jsx-no-leaked-render ([f69bdb1](https://github.com/zmrl010/eslint-config/commit/f69bdb1fe7a8d05d6659e67789c82cd10fa66f83))
* **react:** turn off unneeded rules ([6927e91](https://github.com/zmrl010/eslint-config/commit/6927e919e8003593c8655cb62e3c7b2d502753bf))

# [3.0.0](https://github.com/zmrl010/eslint-config/compare/v2.0.0...v3.0.0) (2022-07-21)


### Bug Fixes

* migrate release from yarn to pnpm ([8ffe61e](https://github.com/zmrl010/eslint-config/commit/8ffe61e67a8d69adbeba51400d482c09cb5948fd))
* reorder pnpm dlx command ([46e3322](https://github.com/zmrl010/eslint-config/commit/46e33227e46e77636b74941b38e1ed0b71c087b9))
* round 2 of fix dlx command ([83045bd](https://github.com/zmrl010/eslint-config/commit/83045bd2ca717023deea36ff75f67aecb05c45c7))
* round 3 of fix dlx command ([aa0e8c3](https://github.com/zmrl010/eslint-config/commit/aa0e8c363e2b81d5b9250dbe86d3488a91b7d9a3))


### Features

* switch to pnpm ([59f6793](https://github.com/zmrl010/eslint-config/commit/59f679343b219c481a35c926edf219c0e252e1c0))

# [2.0.0](https://github.com/zmrl010/eslint-config/compare/v1.1.6...v2.0.0) (2022-07-21)


### Bug Fixes

* install conventialcommits package for release ([8bd0b9e](https://github.com/zmrl010/eslint-config/commit/8bd0b9e4b710a38a5ca7d4e6a13214a3151bd0a9))
* turn off import rules that are already checked by typescript ([08bd254](https://github.com/zmrl010/eslint-config/commit/08bd254f362964e8d48f802ddb613acfd5b87d58))

## [1.1.6](https://github.com/zmrl010/eslint-config/compare/v1.1.5...v1.1.6) (2022-05-26)


### Bug Fixes

* manually get tsconfig path ([0d59cbd](https://github.com/zmrl010/eslint-config/commit/0d59cbd26671c4d6d0b200187739ec036e328b96))

## [1.1.5](https://github.com/zmrl010/eslint-config/compare/v1.1.4...v1.1.5) (2022-05-25)


### Bug Fixes

* trying out import without typescript resolver ([6af9b88](https://github.com/zmrl010/eslint-config/commit/6af9b887f8afa4af893b05db487c2c99cbe6c21f))

## [1.1.4](https://github.com/zmrl010/eslint-config/compare/v1.1.3...v1.1.4) (2022-05-25)


### Bug Fixes

* more explicit resolver config ([a1a6b4b](https://github.com/zmrl010/eslint-config/commit/a1a6b4b6fe11b0c605394f354e67c8a9741c3a17))
* set root in base config ([9a0aa14](https://github.com/zmrl010/eslint-config/commit/9a0aa142c766a4a3ddbc908f6cf9716d812d66ba))

## [1.1.3](https://github.com/zmrl010/eslint-config/compare/v1.1.2...v1.1.3) (2022-05-25)


### Bug Fixes

* include typescript resolver in import override ([e1fc124](https://github.com/zmrl010/eslint-config/commit/e1fc124d7f102ed2f90a9c109ad89518008ed382))

## [1.1.2](https://github.com/zmrl010/eslint-config/compare/v1.1.1...v1.1.2) (2022-05-21)


### Bug Fixes

* remove invalid import config ([ad6cc3a](https://github.com/zmrl010/eslint-config/commit/ad6cc3a85f963289cd5f37b1255a6a737d93e7da))

## [1.1.1](https://github.com/zmrl010/eslint-config/compare/v1.1.0...v1.1.1) (2022-05-21)


### Bug Fixes

* tsconfig resolution to use relative path ([12d3a43](https://github.com/zmrl010/eslint-config/commit/12d3a437651e53f704812b00c11c41306cdec415))

# [1.1.0](https://github.com/zmrl010/eslint-config/compare/v1.0.22...v1.1.0) (2022-05-21)


### Features

* module resolution patch ([0ab713f](https://github.com/zmrl010/eslint-config/commit/0ab713f121a9607ad058fe080eceb29bf42df20f))

## [1.0.22](https://github.com/zmrl010/eslint-config/compare/v1.0.21...v1.0.22) (2022-05-21)


### Bug Fixes

* actually fix tsconfig path for typescript ([9535d32](https://github.com/zmrl010/eslint-config/commit/9535d32e4cd11656954fa671ab7785cb1fd418d1))

## [1.0.21](https://github.com/zmrl010/eslint-config/compare/v1.0.20...v1.0.21) (2022-05-21)


### Bug Fixes

* point import resolver to tsconfig ([489df0b](https://github.com/zmrl010/eslint-config/commit/489df0b10967252ceb87cfb4f299603ab77c6056))

## [1.0.20](https://github.com/zmrl010/eslint-config/compare/v1.0.19...v1.0.20) (2022-04-27)


### Bug Fixes

* semantic release install for ci only ([33517cb](https://github.com/zmrl010/eslint-config/commit/33517cbc1c92a4cb6f9acfe6467d3d52ce615f58))

## [1.0.19](https://github.com/zmrl010/eslint-config/compare/v1.0.18...v1.0.19) (2022-04-26)


### Bug Fixes

* add pinst scripts back in ([e9f7d06](https://github.com/zmrl010/eslint-config/commit/e9f7d066d02abf5cc04e8dc5445f6a99905a006d))

## [1.0.18](https://github.com/zmrl010/eslint-config/compare/v1.0.17...v1.0.18) (2022-04-25)


### Bug Fixes

* revert prepare cmd ([b397deb](https://github.com/zmrl010/eslint-config/commit/b397debdf98f2a20fe9c39d7417be79f14d0f37b))
* try lock install hack ([d0f2fed](https://github.com/zmrl010/eslint-config/commit/d0f2fed36659043fb854e91beeb54a3ef8ccf1fc))

## [1.0.17](https://github.com/zmrl010/eslint-config/compare/v1.0.16...v1.0.17) (2022-04-25)


### Bug Fixes

* try yarn exec ([94f9167](https://github.com/zmrl010/eslint-config/commit/94f916781d9a4eb7f26b59fa70edd963cdbc4de3))

## [1.0.16](https://github.com/zmrl010/eslint-config/compare/v1.0.15...v1.0.16) (2022-04-25)


### Bug Fixes

* releaserc ([7fd7de8](https://github.com/zmrl010/eslint-config/commit/7fd7de88388f1bacd456a4622c2cc89f80f9d915))
* try removing husky workarounds ([6348fde](https://github.com/zmrl010/eslint-config/commit/6348fde17627ea40b97bedfebe34e156a4156fca))

## [1.0.15](https://github.com/zmrl010/eslint-config/compare/v1.0.14...v1.0.15) (2022-04-25)


### Bug Fixes

* run ci ([0d6a3cc](https://github.com/zmrl010/eslint-config/commit/0d6a3cc3cb703ffa3cdab6fe2b26bb22a58b68ba))

## [1.0.14](https://github.com/zmrl010/eslint-config/compare/v1.0.13...v1.0.14) (2022-04-25)


### Bug Fixes

* wrap command in quotes ([93e83b6](https://github.com/zmrl010/eslint-config/commit/93e83b61df0e7fd2230899a225f1f8f5b2098ebe))

## [1.0.13](https://github.com/zmrl010/eslint-config/compare/v1.0.12...v1.0.13) (2022-04-25)


### Bug Fixes

* add ci check to pack scripts ([fb37e90](https://github.com/zmrl010/eslint-config/commit/fb37e901bc598cc62c37e77af4e9284a6c0d9a1d))

## [1.0.12](https://github.com/zmrl010/eslint-config/compare/v1.0.11...v1.0.12) (2022-04-25)


### Bug Fixes

* add alt auth token key back in ([faf51b8](https://github.com/zmrl010/eslint-config/commit/faf51b8779aef48357097cba201115b13ea514a6))

## [1.0.11](https://github.com/zmrl010/eslint-config/compare/v1.0.10...v1.0.11) (2022-04-25)


### Bug Fixes

* move semantic release to dev deps ([0974151](https://github.com/zmrl010/eslint-config/commit/0974151fcada096834706f5be14ab8bedb7a6ad0))
* secret token names ([c29a3ea](https://github.com/zmrl010/eslint-config/commit/c29a3ea2be1695ef9343fbb87a0e3bd9cd6d9797))

## [1.0.10](https://github.com/zmrl010/eslint-config/compare/v1.0.9...v1.0.10) (2022-04-24)


### Bug Fixes

* move semantic-release to ci only ([3c6af8d](https://github.com/zmrl010/eslint-config/commit/3c6af8d097bd1255db7a20b7471d57a6829c62ee))
* SR ci config to use folded style block ([97f581e](https://github.com/zmrl010/eslint-config/commit/97f581ea4f0d5b0e7f2d3ba13fe8f5270e179ee0))

## [1.0.9](https://github.com/zmrl010/eslint-config/compare/v1.0.8...v1.0.9) (2022-04-24)


### Bug Fixes

* is-ci husky condition ([135b424](https://github.com/zmrl010/eslint-config/commit/135b4246948683f11456d4326941d205186ec3fb))
* publish access ([8e48583](https://github.com/zmrl010/eslint-config/commit/8e48583ca54e71039553cb66ca17b2b57e08bab2))

## [1.0.8](https://github.com/zmrl010/eslint-config/compare/v1.0.7...v1.0.8) (2022-04-24)


### Bug Fixes

* trying to get SR working still ([a70fbb4](https://github.com/zmrl010/eslint-config/commit/a70fbb46415e637737cb8c925965c4d468182874))

## [1.0.7](https://github.com/zmrl010/eslint-config/compare/v1.0.6...v1.0.7) (2022-04-24)


### Bug Fixes

* update token name in ci ([629d7d6](https://github.com/zmrl010/eslint-config/commit/629d7d61a5d0bf1c52e4736ea17487178188f3b3))

## [1.0.6](https://github.com/zmrl010/eslint-config/compare/v1.0.5...v1.0.6) (2022-04-24)


### Bug Fixes

* set npm auth to read from env var ([94e364e](https://github.com/zmrl010/eslint-config/commit/94e364e71d93643b8d5d8183ef47fa043f68ed14))

## [1.0.5](https://github.com/zmrl010/eslint-config/compare/v1.0.4...v1.0.5) (2022-04-24)


### Bug Fixes

* publish cmd in release config ([4beb456](https://github.com/zmrl010/eslint-config/commit/4beb456766c360f702f8e28dff307d0f816b1578))

## [1.0.4](https://github.com/zmrl010/eslint-config/compare/v1.0.3...v1.0.4) (2022-04-24)


### Bug Fixes

* add needed semantic-release plugins ([e0b4790](https://github.com/zmrl010/eslint-config/commit/e0b4790f6357c564fc386d37f43c277a6b7d1d96))
* add needed semantic-release plugins *again* ([80093c0](https://github.com/zmrl010/eslint-config/commit/80093c0b4f011f6a37873a9d0ef985cc5b353972))
* custom semantic-release plugins config ([a142a46](https://github.com/zmrl010/eslint-config/commit/a142a46039b6196b5d3093518c59d9652cbca79e))
