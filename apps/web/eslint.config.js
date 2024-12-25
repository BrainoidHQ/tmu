import react from "@brainoid-tmu/eslint/react";
import ts from "typescript-eslint";

export default ts.config(
  react,
  { ignores: ["eslint.config.js", "postcss.config.js"] },
  {
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
