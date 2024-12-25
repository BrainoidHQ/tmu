import ts from "@brainoid-tmu/eslint/ts";
import ESLintTS from "typescript-eslint";

export default ESLintTS.config(ts, {
  ignores: ["eslint.config.js"],
});
