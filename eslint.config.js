import antfu from "@antfu/eslint-config"

export default antfu({
  formatters: {
    /**
     * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
     * By default uses Prettier
     */
    css: true,
    /**
     * Format HTML files
     * By default uses Prettier
     */
    html: true,
    /**
     * Format Markdown files
     * Supports Prettier and dprint
     * By default uses Prettier
     */
    markdown: false, // 'prettier'
  },

  // Or customize the stylistic rules
  stylistic: {
    indent: 2, // 4, or 'tab'
    quotes: "double", // or 'double',
  },

  // TypeScript and Vue are auto-detected, you can also explicitly enable them:
  typescript: true,
  vue: true,

  // Disable jsonc and yaml support
  jsonc: false,
  yaml: false,

  //   unocss: false,
  overrides: {
    vue: {
      "vue/multi-word-component-names": "off",
      "vue/v-on-event-hyphenation": "off",
    },
  },
  rules: {
    "curly": ["error", "all"],
    "unused-imports/no-unused-vars": "warn",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
  },
  // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  ignores: [
    "public",
    ".vscode",
    "src/components.d.ts",
    "*/auto-imports.d.ts",
    "**/*.db",
    "**/target",
  ],
})
