declare module '@typescript-eslint/eslint-plugin' {
  const plugin: {
    rules: Record<string, unknown>;
    configs: Record<string, Record<string, string>>;
  };
  export = plugin;
}
