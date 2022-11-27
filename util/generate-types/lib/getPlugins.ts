import type { TSESLint } from '@typescript-eslint/utils';
import { readPackageUpSync } from 'read-pkg-up';

export type Plugin = {
  name: string;
  rules: Record<string, TSESLint.RuleModule<string, Array<unknown>>>;
  shortName: string;
};

export type PendingPlugin = {
  name: string;
  rules: TSESLint.Linter.Plugin['rules'] | null;
  shortName: string;
};

async function getESLintCoreAsPlugin(): Promise<PendingPlugin> {
  const { builtinRules: eslintRules } = await import(
    'eslint/use-at-your-own-risk'
  );

  return {
    name: 'eslint',
    rules: Object.fromEntries(eslintRules.entries()),
    shortName: 'eslint',
  };
}

function getPkgDeps() {
  return readPackageUpSync()?.packageJson?.dependencies ?? {};
}

/**
 * @returns list of all the eslint plugins installed including eslint core
 */
export function getAllPlugins(): Array<Promise<PendingPlugin>> {
  return Object.keys(getPkgDeps())
    .filter(
      (d) =>
        d.startsWith('eslint-plugin-') ||
        d.endsWith('/eslint-plugin') ||
        d.includes('/eslint-plugin-')
    )
    .map<Promise<PendingPlugin>>(async (d) => {
      // eslint-disable-next-line @typescript-eslint/consistent-type-assertions -- dynamic import is untyped
      const plugin = (await import(d)) as TSESLint.Linter.Plugin;
      return {
        rules: plugin.rules ? { ...plugin.rules } : null,
        name: d,
        shortName: d
          .replace(/^eslint-plugin-/u, '')
          .replace(/\/eslint-plugin$/u, '')
          .replace(/\/eslint-plugin-/u, '/'),
      };
    })
    .concat(getESLintCoreAsPlugin());
}
