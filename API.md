# API Reference

Every function is pure and returns a string. You can compose them by passing one function's output as input to another.

```ts
import { heading, bold, joinBlocks } from 'ts-markdown-builder';
```

Output is [CommonMark](https://spec.commonmark.org/) unless a function is marked as an extension:

- **GFM extension** — part of the [GitHub Flavored Markdown spec](https://github.github.com/gfm/). Supported by GitHub and most GFM renderers (e.g. `remark-gfm`).
- **GitHub extension** — GitHub-only syntax that isn't in the GFM spec. Other renderers show the fallback described for that function.

## Block elements

### `heading`

```ts
heading('Title'); // # Title
heading('Title', { level: 2 }); // ## Title
```

Markdown heading (`#`, `##`, etc.).

```tsx
heading(text: string, options?: { level?: number }): string
```

- `text` — Heading text
- `options.level` — Heading level (1-6). Default: `1`

### `blockquote`

```ts
blockquote('Hello');
// > Hello

blockquote(['Paragraph 1', 'Paragraph 2']);
// > Paragraph 1
// >
// > Paragraph 2
```

Blockquote block. Accepts a string or an array of strings (joined as separate blocks).

```tsx
blockquote(content: string | readonly string[]): string
```

- `content` — Blockquote content

### `alert`

```ts
alert('warning', 'Run `yarn build` first.');
// > [!WARNING]
// > Run `yarn build` first.
```

**GitHub extension.** Alert (callout) block. Accepts a string or an array of strings (joined as separate blocks), rendered as a blockquote under a `[!TYPE]` marker line. Renderers without alert support show a regular blockquote with a literal `[!TYPE]` first line.

```tsx
alert(type: 'note' | 'tip' | 'important' | 'warning' | 'caution', content: string | readonly string[]): string
```

- `type` — Alert type
- `content` — Alert content

### `codeBlock`

````ts
codeBlock('const x = 1;', { language: 'ts' });
// ```ts
// const x = 1;
// ```
````

Fenced code block. The backtick fence adjusts automatically when the content contains backticks.

```tsx
codeBlock(content: string, options?: { language?: string }): string
```

- `content` — Code content
- `options.language` — Language identifier for syntax highlighting. Default: `''`

### `list`

```ts
list(['Apples', 'Oranges']);
// - Apples
// - Oranges
```

Unordered (bullet) list.

```tsx
list(items: readonly string[]): string
```

- `items` — List items

### `orderedList`

```ts
orderedList(['First', 'Second']);
// 1. First
// 2. Second
```

Ordered (numbered) list.

```tsx
orderedList(items: readonly string[]): string
```

- `items` — List items

### `taskList`

```ts
taskList([
  { text: 'Buy milk', done: true },
  'Write docs',
]);
// - [x] Buy milk
// - [ ] Write docs
```

**GFM extension.** Task list with checkboxes. Items can be plain strings (unchecked by default) or `TaskListItem` objects.

```tsx
taskList(items: readonly (string | TaskListItem)[]): string
```

- `items` — Task list items (strings or `TaskListItem` objects)

**`TaskListItem`**

```ts
interface TaskListItem {
  text: string;
  done?: boolean;
}
```

- `text` — Item text
- `done` — Whether the item is checked. Default: `false`

### `horizontalRule`

```ts
horizontalRule; // ---
```

Horizontal rule constant. Not a function -- use it directly.

## Inline elements

### `bold`

```ts
bold('important'); // **important**
```

Bold text (`**...**`).

```tsx
bold(text: string): string
```

- `text` — Text to bold

### `italic`

```ts
italic('emphasis'); // *emphasis*
```

Italic text (`*...*`).

```tsx
italic(text: string): string
```

- `text` — Text to italicize

### `strikethrough`

```ts
strikethrough('removed'); // ~~removed~~
```

**GFM extension.** Strikethrough text (`~~...~~`).

```tsx
strikethrough(text: string): string
```

- `text` — Text to strike through

### `code`

```ts
code('foo'); // `foo`
```

Inline code span. Backtick count and spacing adjust automatically when the text itself contains backticks.

```tsx
code(text: string): string
```

- `text` — Text to mark as code

### `link`

```ts
link('https://example.com', 'Example'); // [Example](https://example.com)
link('https://example.com'); // [https://example.com](https://example.com)
link('./docs/page.md'); // [./docs/page.md](./docs/page.md)
```

Link. Without `text`, the URL is used as the link text (`[url](url)`), which works for relative URLs too.

```tsx
link(url: string, text?: string): string
```

- `url` — Link URL
- `text` — Optional link text (defaults to `url`)

### `image`

```ts
image('photo.png', 'A photo'); // ![A photo](photo.png)
image('photo.png'); // ![](photo.png)
```

Image (`![alt](url)`).

```tsx
image(url: string, text?: string): string
```

- `url` — Image URL
- `text` — Optional alt text

## Table

### `table`

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

table(
  ['A', 'B'],
  [
    ['1', '2'],
  ],
  { compact: true },
);
// | A | B |
// | - | - |
// | 1 | 2 |
```

**GFM extension.** Table. Pipe characters and newlines in cell content are escaped automatically. Returns `''` if `header` is empty.

```tsx
table(
  header: readonly string[],
  rows: readonly string[][],
  options?: TableOptions,
): string
```

- `header` — Column headers
- `rows` — Table rows
- `options.compact` — When `true`, skips column-width padding. Default: `false`

**`TableOptions`**

```ts
interface TableOptions {
  compact?: boolean;
}
```

- `compact` — Disable column-width alignment padding. Default: `false`

## HTML elements

### `disclosure`

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

HTML `<details>`/`<summary>` block. Content is wrapped with blank lines so markdown inside it renders correctly.

```tsx
disclosure(title: string, content: string, options?: DisclosureOptions): string
```

- `title` — Summary text (plain text or markdown heading)
- `content` — Disclosure body (can contain markdown)
- `options.open` — Whether the block is open by default. Default: `false`

**`DisclosureOptions`**

```ts
interface DisclosureOptions {
  open?: boolean;
}
```

- `open` — Render with the `open` attribute. Default: `false`

### `lineBreak`

```ts
lineBreak; // '<br/>'
```

HTML line break constant. Not a function -- use it directly.

## Utilities

### `joinBlocks`

```ts
joinBlocks([
  heading('Title'), 
  list(['A', 'B']),
  'Some text',
]);
// # Title
//
// - A
// - B
//
// Some text'
```

Joins blocks with double newlines (a blank line between each). Trims leading/trailing newlines per block and drops empty ones. Accepts a single string or an array.

```tsx
joinBlocks(blocks: string | readonly string[]): string
```

- `blocks` — Blocks to join

### `escape`

```ts
escape('**not bold**'); // \\*\\*not bold\\*\\*
```

Escapes markdown special characters (`\ ` `` ` `` `*` `_` `{` `}` `[` `]` `(` `)` `#` `+` `-` `.` `!` `|` `<` `>`).

```tsx
escape(text: string): string
```

- `text` — Text to escape

## Exported types

- `TableOptions` — Options for `table()`
- `DisclosureOptions` — Options for `disclosure()`
- `TaskListItem` — Item shape for `taskList()`
