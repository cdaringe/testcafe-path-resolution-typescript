# problem

typescript resolves `foo` dependency just fine using [`tsconfig::compilerOptions::paths`](https://github.com/cdaringe/testcafe-path-resolution-typescript/blob/a7ac2555021f9e85dfb7817c38ba763cb9f52687/tsconfig.json#L10) config, but downstream compilation fails, unable to resolve `foo`.

# demo

- `pnpm install` (or npm, whatever)
- `pnpm test`

```
Error: Cannot find module 'foo'
Require stack:
- /demo/test/page.test.ts
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/compiler/test-file/formats/es-next/compiler.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/compiler/compilers.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/compiler/index.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/runner/bootstrapper.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/runner/index.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/testcafe.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/index.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/cli/cli.js
- /demo/node_modules/.pnpm/testcafe@2.2.0-rc.1/node_modules/testcafe/lib/cli/index.js
```
