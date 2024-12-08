import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        test: "readonly",
        expect: "readonly",
        require: "readonly",
        module: "readonly",
        __dirname: "readonly",
      },
    },
    settings: {
      react: {
        version: "detect", // Автоматически определяет версию React
      },
    },
    rules: {
      "no-restricted-syntax": [
        "error",
        "LabeledStatement",
        "WithStatement",
      ],
      "no-unused-vars": "off",
      "quotes": ["error", "double"],
    },
  },
  
  // конфигурация для плагинов
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];