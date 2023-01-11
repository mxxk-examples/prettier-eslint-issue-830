# Repro for [prettier/prettier-eslint#830](https://github.com/prettier/prettier-eslint/issues/830)

- Both Prettier and ESLint are configured to format strings using single quotes.
- `example.js` and `example.cjs` contain the same literal string—`'\'none\''`
- However, `prettier-eslint` formats these strings differently between the two files:
    - The string in `example.js` is left as-is.
    - The string in `example.cjs` is reformatted as `"'none'"`, which subsequently fails `eslint`.

## Steps to reproduce

```
$ npm install
```

```
$ npx prettier-eslint --write example.cjs example.js
success formatting 1 file with prettier-eslint
1 file was unchanged
```

```
$ npx eslint example.cjs example.js

/repo/example.cjs
  1:16  error  Strings must use singlequote  quotes

✖ 1 problem (1 error, 0 warnings)
  1 error and 0 warnings potentially fixable with the `--fix` option.
```
