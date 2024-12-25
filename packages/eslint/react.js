import ESLintTS from "typescript-eslint";
import ESLintPluginReact from "eslint-plugin-react";
import ESLintPluginJsxA11y from "eslint-plugin-jsx-a11y";

import ts from "./ts.js";

export default ESLintTS.config(
  ts,
  ESLintPluginReact.configs.flat?.["recommended"] ?? {},
  ESLintPluginReact.configs.flat?.["jsx-runtime"] ?? {},
  ESLintPluginJsxA11y.flatConfigs.recommended,
);
