import js from "@eslint/js";
import ts from "typescript-eslint";
import ESLintPluginImport from "eslint-plugin-import";
import ESLintPluginTurbo from "eslint-plugin-turbo";
import ESLintConfigPrettier from "eslint-config-prettier";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

export default ts.config(
  js.configs.recommended,
  ts.configs.strictTypeChecked,
  ts.configs.stylisticTypeChecked,
  ESLintPluginImport.flatConfigs.recommended,
  ESLintPluginTurbo.configs["flat/recommended"],
  ESLintConfigPrettier,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    settings: {
      "import/resolver-next": [
        createTypeScriptImportResolver({
          project: import.meta.dirname,
        }),
      ],
    },
    rules: {
      "@typescript-eslint/prefer-promise-reject-errors": [
        "error",
        {
          allowThrowingUnknown: true,
        },
      ],
    },
  },
);
