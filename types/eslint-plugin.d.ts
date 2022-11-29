declare module 'eslint-plugin-import' {
  const plugin: {
    rules: Record<string, unknown>;
    configs: Record<string, Record<string, string>>;
  };

  export = plugin;
}
