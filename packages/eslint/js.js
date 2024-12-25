import ESLintJS from "@eslint/js";
import ESLintTS from "typescript-eslint";
import ESLintPluginTurbo from "eslint-plugin-turbo";
import ESLintConfigPrettier from "eslint-config-prettier";

export default ESLintTS.config(
  ESLintJS.configs.recommended,
  ESLintPluginTurbo.configs["flat/recommended"],
  ESLintConfigPrettier,
);
