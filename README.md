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

const output = md.joinBlocks([
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

## Functions

### Utils

- [`joinBlocks(blocks: string[])`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#joinblocks) - join blocks of text into a single markdown document (string)

### Block
- [`heading(text: string, options?: { level: number = 1 })`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#heading)
- [`blockquote(text: string | string[])`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#blockquote)
- [`codeBlock(text: string, options?: { language?: string = '' })`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#codeblock)
- [`list(items: string[])`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#list)
- [`orderedList(items: string[])`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#orderedlist)
- [`taskList(items: (string | TaskListItem)[])`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#tasklist) - GFM task list with checkboxes (items can be strings or `{ text: string, done?: boolean }`)
- [`horizontalRule`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#horizontalrule)

### Inline

- [`bold(text: string)`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#bold)
- [`italic(text: string)`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#italic)
- [`strikethrough(text: string)`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#strikethrough) - GFM strikethrough
- [`code(text: string)`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#code)
- [`link(url: string, text?: string)`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#link) - link or autolink
- [`image(url: string, text?: string)`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#image)
- [`escape(text: string)`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#escape)

### Table

- [`table(headers: string[], rows: string[][])`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#table)

### HTML

- [`disclosure(title: string, content: string, options?: { open?: boolean })`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#disclosure)
- [`lineBreak`](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md#linebreak)

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

## Reference

See the full [API Reference](https://github.com/mdjastrzebski/ts-markdown-builder/blob/main/API.md) for detailed documentation, parameter descriptions, and usage examples.
