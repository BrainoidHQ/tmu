import ts from "@brainoid-tmu/eslint/ts";
import ESLintTS from "typescript-eslint";

export default ESLintTS.config(
  ts,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: ["eslint.config.js"],
  },
);
