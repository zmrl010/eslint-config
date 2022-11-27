import type { TSESLint } from '@typescript-eslint/utils';

/**
 * @fileoverview
 *
 * This module provides types for ESLint's new cascading configuration
 */

/**
 * An object containing settings related to the linting process.
 */
export interface LinterOptions {
  /**
   * A boolean value indicating if inline configuration is allowed.
   */
  noInlineConfig?: boolean;

  /**
   * A boolean value indicating if unused disable directives should be tracked and reported.
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
   */
  ecmaVersion?: TSESLint.EcmaVersion;

  /**
   * The type of JavaScript source code. Possible values are `"script"` for traditional script
   * files, `"module"` for ECMAScript modules (ESM), and `"commonjs"` for CommonJS files.
   *
   * @default
   * * `module` for .js and .mjs files
   * * `commonjs` for .cjs files
   */
  sourceType?: TSESLint.SourceType;

  /**
   * An object specifying additional objects that should be added to the global scope during
   * linting.
   */
  globals?: Record<string, TSESLint.Linter.GlobalVariableOption>;

  /**
   * Either an object containing a `parse()` method or a string indicating the name of a parser
   * inside of a plugin (i.e., `"pluginName/parserName"`).
   *
   * @default "@/espree"
   */
  parser?: string | TSESLint.Linter.ParserModule;

  /**
   * An object specifying additional options that are passed directly to the `parser()` method on
   * the parser. The available options are parser-dependent.
   */
  parserOptions?: TSESLint.ParserOptions;
}

/**
 * Flat ESLint Configuration.
 */
export interface FlatConfigItem {
  /**
   * An array of glob patterns indicating the files that the configuration object should apply to.
   * If not specified, the configuration object applies to all files.
   */
  files?: string[];

  /**
   * An array of glob patterns indicating the files that the configuration object should not apply
   * to. If not specified, the configuration object applies to all files matched by files.
   */
  ignores?: string[];

  /**
   * An object containing settings related to how JavaScript is configured for linting.
   */
  languageOptions?: LanguageOptions;

  /**
   * An object containing settings related to the linting process.
   */
  linterOptions?: LinterOptions;

  /**
   * Either an object containing `preprocess()` and `postprocess()` methods or a string indicating
   * the name of a processor inside of a plugin (i.e., `"pluginName/processorName"`).
   */
  processor?: string | TSESLint.Linter.Processor;

  /**
   * An object containing a name-value mapping of plugin names to plugin objects. When `files` is
   * specified, these plugins are only available to the matching files.
   */
  plugins?: Partial<Record<string, TSESLint.Linter.Plugin>>;

  /**
   * An object containing the configured rules. When `files` or `ignores` are specified, these rule
   * configurations are only available to the matching files.
   */
  rules?: Partial<Record<string, TSESLint.Linter.RuleEntry>>;

  /**
   * An object containing name-value pairs of information that should be available to all rules.
   */
  settings?: TSESLint.SharedConfigurationSettings;
}

/**
 * Cascading eslint config array like those found in `eslint.config.js`
 */
export type FlatConfig = readonly FlatConfigItem[];
