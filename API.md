# API Reference

Every function is pure and returns a string. You can compose them by passing one function's output as input to another.

```ts
import { heading, bold, joinBlocks } from 'ts-markdown-builder';
```

## Block elements

### `heading`

```tsx
heading(text: string, options?: { level?: number }): string
```

Markdown heading (`#`, `##`, etc.).

- `text` — Heading text
- `options.level` — Heading level (1-6). Default: `1`

```ts
heading('Title'); // '# Title'
heading('Title', { level: 2 }); // '## Title'
```

### `blockquote`

```tsx
blockquote(content: string | readonly string[]): string
```

Blockquote block. Accepts a string or an array of strings (joined as separate blocks).

- `content` — Blockquote content

```ts
blockquote('Hello');
// '> Hello'

blockquote(['Paragraph 1', 'Paragraph 2']);
// '> Paragraph 1\n> \n> Paragraph 2'
```

### `codeBlock`

```tsx
codeBlock(content: string, options?: { language?: string }): string
```

Fenced code block. The backtick fence adjusts automatically when the content contains backticks.

- `content` — Code content
- `options.language` — Language identifier for syntax highlighting. Default: `''`

````ts
codeBlock('const x = 1;', { language: 'ts' });
// ```ts
// const x = 1;
// ```
````

### `list`

```tsx
list(items: readonly string[]): string
```

Unordered (bullet) list.

- `items` — List items

```ts
list(['Apples', 'Oranges']);
// '- Apples\n- Oranges'
```

### `orderedList`

```tsx
orderedList(items: readonly string[]): string
```

Ordered (numbered) list.

- `items` — List items

```ts
orderedList(['First', 'Second']);
// '1. First\n2. Second'
```

### `taskList`

```tsx
taskList(items: readonly TaskListItem[]): string
```

GFM task list with checkboxes.

- `items` — Task list items

**`TaskListItem`**

- `text` — Item text
- `done` — Whether the item is checked. Default: `false`

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

### `bold`

```tsx
bold(text: string): string
```

Bold text (`**...**`).

- `text` — Text to bold

```ts
bold('important'); // '**important**'
```

### `italic`

```tsx
italic(text: string): string
```

Italic text (`*...*`).

- `text` — Text to italicize

```ts
italic('emphasis'); // '*emphasis*'
```

### `strikethrough`

```tsx
strikethrough(text: string): string
```

GFM strikethrough text (`~~...~~`).

- `text` — Text to strike through

```ts
strikethrough('removed'); // '~~removed~~'
```

### `code`

```tsx
code(text: string): string
```

Inline code span. Backtick count and spacing adjust automatically when the text itself contains backticks.

- `text` — Text to mark as code

```ts
code('foo'); // '`foo`'
code('has `tick`'); // '`` has `tick` ``'
```

### `link`

```tsx
link(url: string, text?: string): string
```

Link or autolink. Without `text`, produces an autolink (`<url>`).

- `url` — Link URL
- `text` — Optional link text

```ts
link('https://example.com', 'Example'); // '[Example](https://example.com)'
link('https://example.com'); // '<https://example.com>'
```

### `image`

```tsx
image(url: string, text?: string): string
```

Image (`![alt](url)`).

- `url` — Image URL
- `text` — Optional alt text

```ts
image('photo.png', 'A photo'); // '![A photo](photo.png)'
image('photo.png'); // '![](photo.png)'
```

## Table

### `table`

```tsx
table(header: readonly string[], rows: readonly string[][], options?: TableOptions): string
```

GFM table. Pipe characters and newlines in cell content are escaped automatically. Returns `''` if `header` is empty.

- `header` — Column headers
- `rows` — Table rows
- `options.compact` — When `true`, skips column-width padding. Default: `false`

**`TableOptions`**

- `compact` — Disable column-width alignment padding. Default: `false`

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

### `disclosure`

```tsx
disclosure(title: string, content: string, options?: DisclosureOptions): string
```

HTML `<details>`/`<summary>` block. Content is wrapped with blank lines so markdown inside it renders correctly.

- `title` — Summary text (plain text or markdown heading)
- `content` — Disclosure body (can contain markdown)
- `options.open` — Whether the block is open by default. Default: `false`

**`DisclosureOptions`**

- `open` — Render with the `open` attribute. Default: `false`

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

### `joinBlocks`

```tsx
joinBlocks(blocks: string | readonly string[]): string
```

Joins blocks with double newlines (a blank line between each). Trims leading/trailing newlines per block and drops empty ones. Accepts a single string or an array.

- `blocks` — Blocks to join

```ts
joinBlocks([heading('Title'), list(['A', 'B']), 'Some text']);
// '# Title\n\n- A\n- B\n\nSome text'
```

### `escape`

```tsx
escape(text: string): string
```

Escapes markdown special characters (`\ ` `` ` `` `*` `_` `{` `}` `[` `]` `(` `)` `#` `+` `-` `.` `!` `|` `<` `>`).

- `text` — Text to escape

```ts
escape('**not bold**'); // '\\*\\*not bold\\*\\*'
```

## Exported types

- `TableOptions` — Options for `table()`
- `DisclosureOptions` — Options for `disclosure()`
- `TaskListItem` — Item shape for `taskList()`
