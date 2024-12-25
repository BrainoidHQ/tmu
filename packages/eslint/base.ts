import js from "@eslint/js";
import ts from "typescript-eslint";
import turbo from "eslint-plugin-turbo";
import prettier from "eslint-config-prettier";

export default ts.config(
  js.configs.recommended,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  turbo.configs["flat/recommended"],
  prettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
  },
);
