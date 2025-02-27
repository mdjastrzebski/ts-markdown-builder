[![npm version](https://badge.fury.io/js/ts-markdown-builder.svg)](https://badge.fury.io/js/ts-markdown-builder)
![Build](https://github.com/mdjastrzebski/ts-markdown-builder/actions/workflows/ci.yml/badge.svg)
![npm bundle size](https://deno.bundlejs.com/badge?q=ts-markdown-builder)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](http://makeapullrequest.com)
[![Star on GitHub](https://img.shields.io/github/stars/mdjastrzebski/ts-markdown-builder.svg?style=social)](https://github.com/mdjastrzebski/ts-markdown-builder/stargazers)

# TS Markdown Builder

Elegant markdown builder with minimal bundle size.

## Goal

TypeScript markdown generation library:

- easy to read and write API
- build CommonMark & GFM compliant markdown
- minimal bundle size + tree-shakable

## Installation

```sh
npm install ts-markdown-builder
```

## Basic usage

```js
import * as md from 'ts-markdown-builder';

const output = joinBlocks([
  md.heading('Welcome to TS Markdown Builder'),
  "It's an easy to use modern markdown generator.",
  'It supports:',
  md.list([
    `${md.bold('bold')} and ${md.italic('italic')}`,
    `${md.code('code')} spans and code blocks`,
    'unordered and ordered lists',
    'blockquotes',
    'and more!',
  ]),
]);
```

```markdown
# Welcome to TS Markdown Builder

It's an easy to use modern markdown generator.

It supports:

- **bold** and _italic_
- \`code\` spans and code blocks
- unordered and ordered lists
- blockquotes
- and more!
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Reference

TODO
