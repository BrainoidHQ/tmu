# `@brainoid-tmu/tsconfig`

## TypeScript

```JSON
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@brainoid-tmu/tsconfig/base.json"
}
```

## Remix

```JSON
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@brainoid-tmu/tsconfig/remix",
  "compilerOptions": {
    "baseUrl": "."
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "**/.server/**/*.ts",
    "**/.server/**/*.tsx",
    "**/.client/**/*.ts",
    "**/.client/**/*.tsx"
  ]
}
```

## Crawlee

```JSON
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "extends": "@brainoid-tmu/tsconfig/crawlee",
  "include": ["./src/**/*"]
}
```
