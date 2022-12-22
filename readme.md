# problem

typescript resolves `foo` dependency just fine using [`tsconfig::compilerOptions::paths`](https://github.com/cdaringe/testcafe-path-resolution-typescript/blob/a7ac2555021f9e85dfb7817c38ba763cb9f52687/tsconfig.json#L10) config, but downstream compilation fails, unable to resolve `foo`.

# demo

- `pnpm install` (or npm, whatever)
- `pnpm test`
