import react from "@brainoid-tmu/eslint/react";
import ESLintTS from "typescript-eslint";

export default ESLintTS.config(
  react,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    ignores: [
      "eslint.config.js",
      "postcss.config.js",
      "build/**",
      "!**/.server",
      "!**/.client",
    ],
  },
);
