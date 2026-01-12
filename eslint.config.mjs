import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "error",
      "space-in-parens": ["error", "never"],
    },
  },
];

