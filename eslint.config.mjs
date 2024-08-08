import globals from "globals";
import pluginJs from "@eslint/js";
import pluginCssModules from "eslint-plugin-css-modules";
import pluginHtml from "eslint-plugin-html";

export default [
  {
    files: ["crypto.js", "src/server.js"],  // Node.js environment
    languageOptions: {
      globals: {
        ...globals.node,
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      js: pluginJs,
    },
    rules: {
      // Node-specific rules or overrides
    },
  },
  {
    files: ["public/**/*.js"],  // Browser environment
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      ecmaVersion: 2021,
      sourceType: "module",
    },
    plugins: {
      js: pluginJs,
      "css-modules": pluginCssModules,
    },
    rules: {
      "no-unused-vars": [
        "warn",
        {
          vars: "all",
          args: "none",
          ignoreRestSiblings: true,
        },
      ],
    },
  },
  {
    files: ["public/**/*.html"],
    plugins: {
      html: pluginHtml,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // HTML-specific rules or overrides
    },
  },
  pluginJs.configs.recommended,
];
