# API Reference

All functions are pure and return strings. Their outputs can be composed by passing one function's result as input to another.

```ts
import { heading, bold, joinBlocks } from 'ts-markdown-builder';
```

## Block Elements

### `heading(text, options?)`

Creates a markdown heading.

| Parameter       | Type     | Default | Description         |
| --------------- | -------- | ------- | ------------------- |
| `text`          | `string` |         | Heading text        |
| `options.level` | `number` | `1`     | Heading level (1-6) |

```ts
heading('Title'); // '# Title'
heading('Title', { level: 2 }); // '## Title'
```

### `blockquote(content)`

Creates a blockquote block. Accepts a string or an array of strings (joined as separate blocks).

| Parameter | Type                          | Description        |
| --------- | ----------------------------- | ------------------ |
| `content` | `string \| readonly string[]` | Blockquote content |

```ts
blockquote('Hello');
// '> Hello'

blockquote(['Paragraph 1', 'Paragraph 2']);
// '> Paragraph 1\n> \n> Paragraph 2'
```

### `codeBlock(content, options?)`

Creates a fenced code block. Backtick fences automatically adjust if the content itself contains backticks.

| Parameter          | Type     | Default | Description                                 |
| ------------------ | -------- | ------- | ------------------------------------------- |
| `content`          | `string` |         | Code content                                |
| `options.language` | `string` | `''`    | Language identifier for syntax highlighting |

````ts
codeBlock('const x = 1;', { language: 'ts' });
// ```ts
// const x = 1;
// ```
````

### `list(items)`

Creates an unordered (bullet) list.

| Parameter | Type                | Description |
| --------- | ------------------- | ----------- |
| `items`   | `readonly string[]` | List items  |

```ts
list(['Apples', 'Oranges']);
// '- Apples\n- Oranges'
```

### `orderedList(items)`

Creates an ordered (numbered) list.

| Parameter | Type                | Description |
| --------- | ------------------- | ----------- |
| `items`   | `readonly string[]` | List items  |

```ts
orderedList(['First', 'Second']);
// '1. First\n2. Second'
```

### `taskList(items)`

Creates a GFM task list (checkboxes).

| Parameter | Type                      | Description     |
| --------- | ------------------------- | --------------- |
| `items`   | `readonly TaskListItem[]` | Task list items |

**`TaskListItem`**

| Field  | Type      | Default | Description                 |
| ------ | --------- | ------- | --------------------------- |
| `text` | `string`  |         | Item text                   |
| `done` | `boolean` | `false` | Whether the item is checked |

```ts
taskList([{ text: 'Buy milk', done: true }, { text: 'Write docs' }]);
// '- [x] Buy milk\n- [ ] Write docs'
```

### `horizontalRule`

A constant string that renders a horizontal rule. Not a function -- use it directly.

```ts
horizontalRule; // '---'
```

## Inline Elements

### `bold(text)`

Wraps text in bold markers.

| Parameter | Type     | Description  |
| --------- | -------- | ------------ |
| `text`    | `string` | Text to bold |

```ts
bold('important'); // '**important**'
```

### `italic(text)`

Wraps text in italic markers.

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `text`    | `string` | Text to italicize |

```ts
italic('emphasis'); // '*emphasis*'
```

### `code(text)`

Wraps text in inline code backticks. Automatically adjusts backtick count and spacing if the text contains backticks.

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| `text`    | `string` | Text to mark as code |

```ts
code('foo'); // '`foo`'
code('has `tick`'); // '`` has `tick` ``'
```

### `link(url, text?)`

Creates a link. When `text` is omitted, produces an autolink (`<url>`).

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| `url`     | `string` | Link URL           |
| `text`    | `string` | Optional link text |

```ts
link('https://example.com', 'Example'); // '[Example](https://example.com)'
link('https://example.com'); // '<https://example.com>'
```

### `image(url, text?)`

Creates an image.

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `url`     | `string` | Image URL         |
| `text`    | `string` | Optional alt text |

```ts
image('photo.png', 'A photo'); // '![A photo](photo.png)'
image('photo.png'); // '![](photo.png)'
```

## Table

### `table(header, rows, options?)`

Creates a GFM table. Pipe characters and newlines in cell content are escaped automatically. Returns an empty string if `header` is empty.

| Parameter         | Type                  | Default | Description                             |
| ----------------- | --------------------- | ------- | --------------------------------------- |
| `header`          | `readonly string[]`   |         | Column headers                          |
| `rows`            | `readonly string[][]` |         | Table rows                              |
| `options.compact` | `boolean`             | `false` | When `true`, skips column-width padding |

**`TableOptions`**

| Field     | Type      | Default | Description                            |
| --------- | --------- | ------- | -------------------------------------- |
| `compact` | `boolean` | `false` | Disable column-width alignment padding |

```ts
table(
  ['Name', 'Age'],
  [
    ['Alice', '30'],
    ['Bob', '25'],
  ],
);
// | Name  | Age |
// | ----- | --- |
// | Alice | 30  |
// | Bob   | 25  |

table(['A', 'B'], [['1', '2']], { compact: true });
// | A | B |
// | - | - |
// | 1 | 2 |
```

## HTML Elements

### `disclosure(title, content, options?)`

Creates an HTML `<details>`/`<summary>` disclosure block. Content is wrapped with blank lines so markdown inside it renders correctly.

| Parameter      | Type      | Default | Description                                   |
| -------------- | --------- | ------- | --------------------------------------------- |
| `title`        | `string`  |         | Summary text (plain text or markdown heading) |
| `content`      | `string`  |         | Disclosure body (can contain markdown)        |
| `options.open` | `boolean` | `false` | Whether the block is open by default          |

**`DisclosureOptions`**

| Field  | Type      | Default | Description                      |
| ------ | --------- | ------- | -------------------------------- |
| `open` | `boolean` | `false` | Render with the `open` attribute |

```ts
disclosure('Click me', 'Hidden content');
// <details>
// <summary>Click me</summary>
//
// Hidden content
//
// </details>

disclosure('Details', 'Body', { open: true });
// <details open>
// <summary>Details</summary>
//
// Body
//
// </details>
```

### `lineBreak`

A constant string that renders an HTML line break. Not a function -- use it directly.

```ts
lineBreak; // '<br/>'
```

## Utilities

### `joinBlocks(blocks)`

Joins markdown blocks with double newlines (blank line between each). Trims leading/trailing newlines from each block and filters out empty blocks. Accepts a single string or an array of strings.

| Parameter | Type                          | Description    |
| --------- | ----------------------------- | -------------- |
| `blocks`  | `string \| readonly string[]` | Blocks to join |

```ts
joinBlocks([heading('Title'), list(['A', 'B']), 'Some text']);
// '# Title\n\n- A\n- B\n\nSome text'
```

### `escape(text)`

Escapes markdown special characters (`\ ` `` ` `` `*` `_` `{` `}` `[` `]` `(` `)` `#` `+` `-` `.` `!` `|` `<` `>`).

| Parameter | Type     | Description    |
| --------- | -------- | -------------- |
| `text`    | `string` | Text to escape |

```ts
escape('**not bold**'); // '\\*\\*not bold\\*\\*'
```

## Exported Types

| Type                | Description                 |
| ------------------- | --------------------------- |
| `TableOptions`      | Options for `table()`       |
| `DisclosureOptions` | Options for `disclosure()`  |
| `TaskListItem`      | Item shape for `taskList()` |
