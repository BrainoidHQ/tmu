# `@brainoid-tmu/eslint`

## JavaScript

```JavaScript
import js from "@brainoid-tmu/eslint/js";
import ESLintTS from "typescript-eslint";

export default ESLintTS.config(
  js,
  {
    // your configurations
  }
);
```

## TypeScript

```JavaScript
import ts from "@brainoid-tmu/eslint/ts";
import ESLintTS from "typescript-eslint";

export default ESLintTS.config(
  ts,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // your configurations
  },
);
```

## React (TypeScript)

```JavaScript
import react from "@brainoid-tmu/eslint/react";
import ESLintTS from "typescript-eslint";

export default ESLintTS.config(
  react,
  {
    languageOptions: {
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // your configurations
  },
);
```
