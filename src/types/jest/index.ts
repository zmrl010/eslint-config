/**
 * THIS FILE IS AUTO-GENERATED.
 * DO NOT MODIFY IT MANUALLY
 * RUN `pnpm generate:types` TO REGENERATE IT.
 */

import type { ConsistentTestIt } from '../jest/consistent-test-it.js';
import type { ExpectExpect } from '../jest/expect-expect.js';
import type { MaxExpects } from '../jest/max-expects.js';
import type { MaxNestedDescribe } from '../jest/max-nested-describe.js';
import type { NoAliasMethods } from '../jest/no-alias-methods.js';
import type { NoCommentedOutTests } from '../jest/no-commented-out-tests.js';
import type { NoConditionalExpect } from '../jest/no-conditional-expect.js';
import type { NoConditionalInTest } from '../jest/no-conditional-in-test.js';
import type { NoDeprecatedFunctions } from '../jest/no-deprecated-functions.js';
import type { NoDisabledTests } from '../jest/no-disabled-tests.js';
import type { NoDoneCallback } from '../jest/no-done-callback.js';
import type { NoDuplicateHooks } from '../jest/no-duplicate-hooks.js';
import type { NoExport } from '../jest/no-export.js';
import type { NoFocusedTests } from '../jest/no-focused-tests.js';
import type { NoHooks } from '../jest/no-hooks.js';
import type { NoIdenticalTitle } from '../jest/no-identical-title.js';
import type { NoInterpolationInSnapshots } from '../jest/no-interpolation-in-snapshots.js';
import type { NoJasmineGlobals } from '../jest/no-jasmine-globals.js';
import type { NoLargeSnapshots } from '../jest/no-large-snapshots.js';
import type { NoMocksImport } from '../jest/no-mocks-import.js';
import type { NoRestrictedJestMethods } from '../jest/no-restricted-jest-methods.js';
import type { NoRestrictedMatchers } from '../jest/no-restricted-matchers.js';
import type { NoStandaloneExpect } from '../jest/no-standalone-expect.js';
import type { NoTestPrefixes } from '../jest/no-test-prefixes.js';
import type { NoTestReturnStatement } from '../jest/no-test-return-statement.js';
import type { PreferCalledWith } from '../jest/prefer-called-with.js';
import type { PreferComparisonMatcher } from '../jest/prefer-comparison-matcher.js';
import type { PreferEach } from '../jest/prefer-each.js';
import type { PreferEqualityMatcher } from '../jest/prefer-equality-matcher.js';
import type { PreferExpectAssertions } from '../jest/prefer-expect-assertions.js';
import type { PreferExpectResolves } from '../jest/prefer-expect-resolves.js';
import type { PreferHooksInOrder } from '../jest/prefer-hooks-in-order.js';
import type { PreferHooksOnTop } from '../jest/prefer-hooks-on-top.js';
import type { PreferLowercaseTitle } from '../jest/prefer-lowercase-title.js';
import type { PreferMockPromiseShorthand } from '../jest/prefer-mock-promise-shorthand.js';
import type { PreferSnapshotHint } from '../jest/prefer-snapshot-hint.js';
import type { PreferSpyOn } from '../jest/prefer-spy-on.js';
import type { PreferStrictEqual } from '../jest/prefer-strict-equal.js';
import type { PreferToBe } from '../jest/prefer-to-be.js';
import type { PreferToContain } from '../jest/prefer-to-contain.js';
import type { PreferToHaveLength } from '../jest/prefer-to-have-length.js';
import type { PreferTodo } from '../jest/prefer-todo.js';
import type { RequireHook } from '../jest/require-hook.js';
import type { RequireToThrowMessage } from '../jest/require-to-throw-message.js';
import type { RequireTopLevelDescribe } from '../jest/require-top-level-describe.js';
import type { UnboundMethod } from '../jest/unbound-method.js';
import type { ValidDescribeCallback } from '../jest/valid-describe-callback.js';
import type { ValidExpectInPromise } from '../jest/valid-expect-in-promise.js';
import type { ValidExpect } from '../jest/valid-expect.js';
import type { ValidTitle } from '../jest/valid-title.js';

/**
 * `eslint-plugin-jest` Rules
 */
export interface Jest {
  /**
   * Enforce `test` and `it` usage conventions
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/consistent-test-it.md
   */
  'jest/consistent-test-it': ConsistentTestIt;

  /**
   * Enforce assertion to be made in a test body
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/expect-expect.md
   */
  'jest/expect-expect': ExpectExpect;

  /**
   * Enforces a maximum number assertion calls in a test body
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/max-expects.md
   */
  'jest/max-expects': MaxExpects;

  /**
   * Enforces a maximum depth to nested describe calls
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/max-nested-describe.md
   */
  'jest/max-nested-describe': MaxNestedDescribe;

  /**
   * Disallow alias methods
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-alias-methods.md
   */
  'jest/no-alias-methods': NoAliasMethods;

  /**
   * Disallow commented out tests
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-commented-out-tests.md
   */
  'jest/no-commented-out-tests': NoCommentedOutTests;

  /**
   * Disallow calling `expect` conditionally
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-conditional-expect.md
   */
  'jest/no-conditional-expect': NoConditionalExpect;

  /**
   * Disallow conditional logic in tests
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-conditional-in-test.md
   */
  'jest/no-conditional-in-test': NoConditionalInTest;

  /**
   * Disallow use of deprecated functions
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-deprecated-functions.md
   */
  'jest/no-deprecated-functions': NoDeprecatedFunctions;

  /**
   * Disallow disabled tests
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-disabled-tests.md
   */
  'jest/no-disabled-tests': NoDisabledTests;

  /**
   * Disallow using a callback in asynchronous tests and hooks
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-done-callback.md
   */
  'jest/no-done-callback': NoDoneCallback;

  /**
   * Disallow duplicate setup and teardown hooks
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-duplicate-hooks.md
   */
  'jest/no-duplicate-hooks': NoDuplicateHooks;

  /**
   * Disallow using `exports` in files containing tests
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-export.md
   */
  'jest/no-export': NoExport;

  /**
   * Disallow focused tests
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-focused-tests.md
   */
  'jest/no-focused-tests': NoFocusedTests;

  /**
   * Disallow setup and teardown hooks
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-hooks.md
   */
  'jest/no-hooks': NoHooks;

  /**
   * Disallow identical titles
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-identical-title.md
   */
  'jest/no-identical-title': NoIdenticalTitle;

  /**
   * Disallow string interpolation inside snapshots
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-interpolation-in-snapshots.md
   */
  'jest/no-interpolation-in-snapshots': NoInterpolationInSnapshots;

  /**
   * Disallow Jasmine globals
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-jasmine-globals.md
   */
  'jest/no-jasmine-globals': NoJasmineGlobals;

  /**
   * Disallow large snapshots
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-large-snapshots.md
   */
  'jest/no-large-snapshots': NoLargeSnapshots;

  /**
   * Disallow manually importing from `__mocks__`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-mocks-import.md
   */
  'jest/no-mocks-import': NoMocksImport;

  /**
   * Disallow specific `jest.` methods
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-restricted-jest-methods.md
   */
  'jest/no-restricted-jest-methods': NoRestrictedJestMethods;

  /**
   * Disallow specific matchers & modifiers
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-restricted-matchers.md
   */
  'jest/no-restricted-matchers': NoRestrictedMatchers;

  /**
   * Disallow using `expect` outside of `it` or `test` blocks
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-standalone-expect.md
   */
  'jest/no-standalone-expect': NoStandaloneExpect;

  /**
   * Require using `.only` and `.skip` over `f` and `x`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-test-prefixes.md
   */
  'jest/no-test-prefixes': NoTestPrefixes;

  /**
   * Disallow explicitly returning from tests
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/no-test-return-statement.md
   */
  'jest/no-test-return-statement': NoTestReturnStatement;

  /**
   * Suggest using `toBeCalledWith()` or `toHaveBeenCalledWith()`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-called-with.md
   */
  'jest/prefer-called-with': PreferCalledWith;

  /**
   * Suggest using the built-in comparison matchers
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-comparison-matcher.md
   */
  'jest/prefer-comparison-matcher': PreferComparisonMatcher;

  /**
   * Prefer using `.each` rather than manual loops
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-each.md
   */
  'jest/prefer-each': PreferEach;

  /**
   * Suggest using the built-in equality matchers
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-equality-matcher.md
   */
  'jest/prefer-equality-matcher': PreferEqualityMatcher;

  /**
   * Suggest using `expect.assertions()` OR `expect.hasAssertions()`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-expect-assertions.md
   */
  'jest/prefer-expect-assertions': PreferExpectAssertions;

  /**
   * Prefer `await expect(...).resolves` over `expect(await ...)` syntax
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-expect-resolves.md
   */
  'jest/prefer-expect-resolves': PreferExpectResolves;

  /**
   * Prefer having hooks in a consistent order
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-hooks-in-order.md
   */
  'jest/prefer-hooks-in-order': PreferHooksInOrder;

  /**
   * Suggest having hooks before any test cases
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-hooks-on-top.md
   */
  'jest/prefer-hooks-on-top': PreferHooksOnTop;

  /**
   * Enforce lowercase test names
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-lowercase-title.md
   */
  'jest/prefer-lowercase-title': PreferLowercaseTitle;

  /**
   * Prefer mock resolved/rejected shorthands for promises
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-mock-promise-shorthand.md
   */
  'jest/prefer-mock-promise-shorthand': PreferMockPromiseShorthand;

  /**
   * Prefer including a hint with external snapshots
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-snapshot-hint.md
   */
  'jest/prefer-snapshot-hint': PreferSnapshotHint;

  /**
   * Suggest using `jest.spyOn()`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-spy-on.md
   */
  'jest/prefer-spy-on': PreferSpyOn;

  /**
   * Suggest using `toStrictEqual()`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-strict-equal.md
   */
  'jest/prefer-strict-equal': PreferStrictEqual;

  /**
   * Suggest using `toBe()` for primitive literals
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-to-be.md
   */
  'jest/prefer-to-be': PreferToBe;

  /**
   * Suggest using `toContain()`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-to-contain.md
   */
  'jest/prefer-to-contain': PreferToContain;

  /**
   * Suggest using `toHaveLength()`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-to-have-length.md
   */
  'jest/prefer-to-have-length': PreferToHaveLength;

  /**
   * Suggest using `test.todo`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/prefer-todo.md
   */
  'jest/prefer-todo': PreferTodo;

  /**
   * Require setup and teardown code to be within a hook
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/require-hook.md
   */
  'jest/require-hook': RequireHook;

  /**
   * Require a message for `toThrow()`
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/require-to-throw-message.md
   */
  'jest/require-to-throw-message': RequireToThrowMessage;

  /**
   * Require test cases and hooks to be inside a `describe` block
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/require-top-level-describe.md
   */
  'jest/require-top-level-describe': RequireTopLevelDescribe;

  /**
   * Enforce unbound methods are called with their expected scope
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/unbound-method.md
   */
  'jest/unbound-method': UnboundMethod;

  /**
   * Enforce valid `describe()` callback
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/valid-describe-callback.md
   */
  'jest/valid-describe-callback': ValidDescribeCallback;

  /**
   * Require promises that have expectations in their chain to be valid
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/valid-expect-in-promise.md
   */
  'jest/valid-expect-in-promise': ValidExpectInPromise;

  /**
   * Enforce valid `expect()` usage
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/valid-expect.md
   */
  'jest/valid-expect': ValidExpect;

  /**
   * Enforce valid titles
   * @see https://github.com/jest-community/eslint-plugin-jest/blob/v27.1.6/docs/rules/valid-title.md
   */
  'jest/valid-title': ValidTitle;
}
