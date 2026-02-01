# API Reference

Every function is pure and returns a string. You can compose them by passing one function's output as input to another.

```ts
import { heading, bold, joinBlocks } from 'ts-markdown-builder';
```

## Block elements

### `heading(text, options?)`

Markdown heading (`#`, `##`, etc.).

| Parameter       | Type     | Default | Description         |
| --------------- | -------- | ------- | ------------------- |
| `text`          | `string` |         | Heading text        |
| `options.level` | `number` | `1`     | Heading level (1-6) |

```ts
heading('Title'); // '# Title'
heading('Title', { level: 2 }); // '## Title'
```

### `blockquote(content)`

Blockquote block. Accepts a string or an array of strings (joined as separate blocks).

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

Fenced code block. The backtick fence adjusts automatically when the content contains backticks.

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

Unordered (bullet) list.

| Parameter | Type                | Description |
| --------- | ------------------- | ----------- |
| `items`   | `readonly string[]` | List items  |

```ts
list(['Apples', 'Oranges']);
// '- Apples\n- Oranges'
```

### `orderedList(items)`

Ordered (numbered) list.

| Parameter | Type                | Description |
| --------- | ------------------- | ----------- |
| `items`   | `readonly string[]` | List items  |

```ts
orderedList(['First', 'Second']);
// '1. First\n2. Second'
```

### `taskList(items)`

GFM task list with checkboxes.

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

Horizontal rule constant. Not a function -- use it directly.

```ts
horizontalRule; // '---'
```

## Inline elements

### `bold(text)`

Bold text (`**...**`).

| Parameter | Type     | Description  |
| --------- | -------- | ------------ |
| `text`    | `string` | Text to bold |

```ts
bold('important'); // '**important**'
```

### `italic(text)`

Italic text (`*...*`).

| Parameter | Type     | Description       |
| --------- | -------- | ----------------- |
| `text`    | `string` | Text to italicize |

```ts
italic('emphasis'); // '*emphasis*'
```

### `code(text)`

Inline code span. Backtick count and spacing adjust automatically when the text itself contains backticks.

| Parameter | Type     | Description          |
| --------- | -------- | -------------------- |
| `text`    | `string` | Text to mark as code |

```ts
code('foo'); // '`foo`'
code('has `tick`'); // '`` has `tick` ``'
```

### `link(url, text?)`

Link or autolink. Without `text`, produces an autolink (`<url>`).

| Parameter | Type     | Description        |
| --------- | -------- | ------------------ |
| `url`     | `string` | Link URL           |
| `text`    | `string` | Optional link text |

```ts
link('https://example.com', 'Example'); // '[Example](https://example.com)'
link('https://example.com'); // '<https://example.com>'
```

### `image(url, text?)`

Image (`![alt](url)`).

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

GFM table. Pipe characters and newlines in cell content are escaped automatically. Returns `''` if `header` is empty.

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

## HTML elements

### `disclosure(title, content, options?)`

HTML `<details>`/`<summary>` block. Content is wrapped with blank lines so markdown inside it renders correctly.

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

HTML line break constant. Not a function -- use it directly.

```ts
lineBreak; // '<br/>'
```

## Utilities

### `joinBlocks(blocks)`

Joins blocks with double newlines (a blank line between each). Trims leading/trailing newlines per block and drops empty ones. Accepts a single string or an array.

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

## Exported types

| Type                | Description                 |
| ------------------- | --------------------------- |
| `TableOptions`      | Options for `table()`       |
| `DisclosureOptions` | Options for `disclosure()`  |
| `TaskListItem`      | Item shape for `taskList()` |
