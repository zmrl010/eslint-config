type GenericPlugin = {
  rules: Record<string, unknown>;
  configs: Record<string, Record<string, string>>;
};

declare module 'eslint-plugin-import' {
  const plugin: GenericPlugin;
  export = plugin;
}

declare module 'eslint-plugin-react-hooks' {
  const plugin: GenericPlugin;
  export = plugin;
}

declare module '@typescript-eslint/eslint-plugin' {
  const plugin: GenericPlugin;
  export = plugin;
}
