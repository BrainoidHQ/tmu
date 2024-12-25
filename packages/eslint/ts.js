import ESLintTS from "typescript-eslint";
import ESLintPluginImport from "eslint-plugin-import";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

import js from "./js.js";

export default ESLintTS.config(
  js,
  ESLintTS.configs.strictTypeChecked,
  ESLintTS.configs.stylisticTypeChecked,
  ESLintPluginImport.flatConfigs.recommended,
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
