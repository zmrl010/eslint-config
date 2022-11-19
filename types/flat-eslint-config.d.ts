import type { TSESLint } from '@typescript-eslint/utils';

export type RulesRecord = TSESLint.Linter.RulesRecord;

/**
 * An object containing settings related to the linting process.
 */
export interface LinterOptions {
  /**
   * A boolean value indicating if inline configuration is allowed.
   *
   * @see [Disabling inline configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#disabling-inline-configuration)
   */
  noInlineConfig?: boolean;

  /**
   * A boolean value indicating if unused disable directives should be tracked and reported.
   *
   * @see [Reporting unused disable directives](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#reporting-unused-disable-directives)
   */
  reportUnusedDisableDirectives?: boolean;
}

/**
 * An object containing settings related to how JavaScript is configured for linting
 */
export interface LanguageOptions {
  /**
   * The version of ECMAScript to support. May be any year (i.e., `2022`) or version (i.e., `5`).
   * Set to `"latest"` for the most recent supported version.
   *
   * @default "latest"
   * @see [Configuring the JavaScript version](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-the-javascript-version)
   */
  ecmaVersion?: TSESLint.EcmaVersion;

  /**
   * The type of JavaScript source code. Possible values are `"script"` for traditional script
   * files, `"module"` for ECMAScript modules (ESM), and `"commonjs"` for CommonJS files.
   *
   * (default: `"module"` for .js and .mjs files; `"commonjs"` for .cjs files)
   *
   * @see [Configuring the JavaScript source type](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-the-javascript-source-type)
   */
  sourceType?: TSESLint.SourceType;

  /**
   * An object specifying additional objects that should be added to the global scope during
   * linting.
   *
   * @see [Configuring global variables](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-global-variables)
   */
  globals?: Record<string, TSESLint.Linter.GlobalVariableOption>;

  /**
   * Either an object containing a `parse()` method or a string indicating the name of a parser
   * inside of a plugin (i.e., `"pluginName/parserName"`).
   *
   * @default "@/espree"
   *
   * @see [Configuring a custom parser and its options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-a-custom-parser-and-its-options)
   */
  parser?: string | TSESLint.Linter.ParserModule;

  /**
   * An object specifying additional options that are passed directly to the `parser()` method on
   * the parser. The available options are parser-dependent.
   *
   * @see [Configuring a custom parser and its options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-a-custom-parser-and-its-options)
   */
  parserOptions?: TSESLint.ParserOptions;
}

/**
 * Flat ESLint Configuration.
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 */
export interface FlatESLintConfig {
  /**
   * An array of glob patterns indicating the files that the configuration object should apply to.
   * If not specified, the configuration object applies to all files.
   *
   * @see [Ignore Patterns](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#excluding-files-with-ignores)
   */
  files?: string[];

  /**
   * An array of glob patterns indicating the files that the configuration object should not apply
   * to. If not specified, the configuration object applies to all files matched by files.
   *
   * @see [Ignore Patterns](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#excluding-files-with-ignores)
   */
  ignores?: string[];

  /**
   * An object containing settings related to how JavaScript is configured for linting.
   *
   * @see [Configuring language options](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-language-options)
   */
  languageOptions?: LanguageOptions;

  /**
   * An object containing settings related to the linting process.
   */
  linterOptions?: LinterOptions;

  /**
   * Either an object containing `preprocess()` and `postprocess()` methods or a string indicating
   * the name of a processor inside of a plugin (i.e., `"pluginName/processorName"`).
   *
   * @see [Using processors](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-processors)
   */
  processor?: string | TSESLint.Linter.Processor;

  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is
   * specified, these plugins are only available to the matching files.
   *
   * @see [Using plugins in your configuration](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#using-plugins-in-your-configuration)
   */
  plugins?: Partial<Record<string, TSESLint.Linter.Plugin>>;

  /**
   * An object containing the configured rules. When `files` or `ignores` are specified, these rule
   * configurations are only available to the matching files.
   *
   * @see [Configuring rules](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-rules)
   */
  rules?: Partial<Record<string, TSESLint.Linter.RuleEntry | string | number>>;

  /**
   * An object containing name-value pairs of information that should be available to all rules.
   *
   * @see [Configuring shared settings](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new#configuring-shared-settings)
   */
  settings?: TSESLint.SharedConfigurationSettings;
}

/**
 * Cascading eslint config array like those found in `eslint.config.js`
 *
 * @see [Configuration Files (New)](https://eslint.org/docs/latest/user-guide/configuring/configuration-files-new)
 */
export type FlatConfigArray = readonly FlatESLintConfig[];
