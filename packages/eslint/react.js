import ts from "typescript-eslint";
import react from "eslint-plugin-react";
import a11y from "eslint-plugin-jsx-a11y";

import base from "./base.js";

export default ts.config(
  base,
  react.configs.flat?.["recommended"] ?? {},
  react.configs.flat?.["jsx-runtime"] ?? {},
  a11y.flatConfigs.recommended,
);
