# prettier-m - a less opinionated fork of Prettier

<p align="center">
  <em>
    JavaScript
    · TypeScript
    · Flow
    · JSX
    · JSON
  </em>
  <br />
  <em>
    CSS
    · SCSS
    · Less
  </em>
  <br />
  <em>
    HTML
    · Vue
    · Angular
  </em>
  <br />
  <em>
    GraphQL
    · Markdown
    · YAML
  </em>
  <br />
  <em>
    <a href="https://prettier.io/docs/en/plugins.html">
      Your favorite language?
    </a>
  </em>
</p>

<p align="center">
  <a href="https://github.com/prettier/prettier/actions?query=workflow%3AProd+branch%3Amain">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/workflow/status/prettier/prettier/Prod?label=Prod&style=flat-square"></a>
  <a href="https://github.com/prettier/prettier/actions?query=workflow%3ADev+branch%3Amain">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/workflow/status/prettier/prettier/Dev?label=Dev&style=flat-square"></a>
  <a href="https://github.com/prettier/prettier/actions?query=workflow%3ALint+branch%3Amain">
    <img alt="Github Actions Build Status" src="https://img.shields.io/github/workflow/status/prettier/prettier/Lint?label=Lint&style=flat-square"></a>
  <a href="https://codecov.io/gh/prettier/prettier">
    <img alt="Codecov Coverage Status" src="https://img.shields.io/codecov/c/github/prettier/prettier.svg?style=flat-square"></a>
  <a href="https://twitter.com/acdlite/status/974390255393505280">
    <img alt="Blazing Fast" src="https://img.shields.io/badge/speed-blazing%20%F0%9F%94%A5-brightgreen.svg?style=flat-square"></a>
  <br/>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="npm version" src="https://img.shields.io/npm/v/prettier.svg?style=flat-square"></a>
  <a href="https://www.npmjs.com/package/prettier">
    <img alt="weekly downloads from npm" src="https://img.shields.io/npm/dw/prettier.svg?style=flat-square"></a>
  <a href="#badge">
    <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
  <a href="https://twitter.com/PrettierCode">
    <img alt="Follow Prettier on Twitter" src="https://img.shields.io/twitter/follow/prettiercode.svg?label=follow+prettier&style=flat-square"></a>
</p>

## Intro

An unofficial fork of the Prettier code formatter, intended to provide some additional options to help more customize prettier options.

### Input

<!-- prettier-ignore -->
```js
foo(reallyLongArg(), omgSoManyParameters(), IShouldRefactorThis(), isThereSeriouslyAnotherOne());
```

### Output

```js
foo(
  reallyLongArg(),
  omgSoManyParameters(),
  IShouldRefactorThis(),
  isThereSeriouslyAnotherOne()
);
```

## CLI Usage

**Quick CLI usage:**

```sh
prettier <options> <file(s)>
```

## Additional prettier-m options

- `--array-bracket-spacing` (`arrayBracketSpacing: true`): Put spaces between array brackets (similar to the corresponding eslint option). Status: experimental, with limited testing.
- `--break-before-else` (`breakBeforeElse: true`): Always add a line break before else.
- `--break-long-method-chains` (`breakLongMethodChains: true`): Break method chains with more than 3 method calls, like Prettier 1.x.
- `--no-indent-chains` (`indentChains: false`): Disable indents at the start of chained calls.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).