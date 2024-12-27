import ESLintTS from "typescript-eslint";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";

import js from "./js.js";

export default ESLintTS.config(
  js,
  ESLintTS.configs.strictTypeChecked,
  ESLintTS.configs.stylisticTypeChecked,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      "import/resolver-next": [
        createTypeScriptImportResolver({
          alwaysTryTypes: true,
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
