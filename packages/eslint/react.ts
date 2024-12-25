import ts from "typescript-eslint";
import react from "eslint-plugin-react";

import base from "./base";

export default ts.config(
  base,
  react.configs.flat?.["recommended"] ?? {},
  react.configs.flat?.["jsx-runtime"] ?? {},
);
