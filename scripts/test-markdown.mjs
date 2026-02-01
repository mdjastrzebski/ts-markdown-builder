#!/usr/bin/env node

import * as md from '../dist/esm/index.mjs';

const table = md.table(
  ['A', 'B', 'C'],
  [
    ['1', '2', '3'],
    ['4', '5', '6'],
  ],
);

const output = md.joinBlocks([
  md.heading('Heading 1', { level: 1 }),
  md.heading('Heading 2', { level: 2 }),
  md.heading('Heading 3', { level: 3 }),
  md.heading('Heading 4', { level: 4 }),
  md.heading('Heading 5', { level: 5 }),
  md.heading('Heading 6', { level: 6 }),

  md.heading('Lists', { level: 2 }),
  md.list(['Item 1', 'Item 2', 'Item 3']),
  md.orderedList(['Item 1', 'Item 2', 'Item 3']),
  md.taskList([{ text: 'Item 1' }, { text: 'Item 2', done: true }, { text: 'Item 3', done: false }]),

  md.heading('Blocks', { level: 2 }),
  md.blockquote('This is a blockquote.\nIt can span multiple lines.'),
  md.codeBlock("console.log('Hello, world!');\nconsole.log('Hello markdown!"),
  md.horizontalRule,

  md.heading('Inline', { level: 2 }),
  md.list([
    md.bold('bold'),
    md.italic('Italic'),
    md.code('code with `backticks` and other **stuff**'),
    md.link('https://example.com', 'link'),
    md.link('https://example.com'),
    md.image('https://markdown-here.com/img/icon64.png', 'Markdown Logo'),
  ]),

  md.heading('Blockquote', { level: 2 }),

  md.blockquote('This is a basic blockquote.\nIt can span multiple lines.'),

  md.blockquote([
    'Single indent',
    md.blockquote([
      'Double indent', //
      md.blockquote('Triple indent'),
    ]),
    'Single indent',
  ]),

  md.blockquote([
    md.heading('Heading'),
    md.codeBlock('Code Line 1\nCode Line 2'),
    md.list(['Item 1', 'Item 2', 'Item 3']),
  ]),

  md.heading('Tables', { level: 2 }),
  table,

  md.heading('HTML', { level: 2 }),

  md.heading('Disclosure', { level: 3 }),
  md.disclosure('Summary', 'This is a disclosure.'),
  md.disclosure(`AAA ${md.bold('Bold')} and ${md.italic('Italic')}`, 'This is a disclosure.'),
  md.disclosure(md.heading('Heading 1', { level: 1 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 2', { level: 2 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 3', { level: 3 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 4', { level: 4 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 5', { level: 5 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 6', { level: 6 }), 'This is paragraph.'),
  md.disclosure(md.heading('Table In Details', { level: 3 }), table),

  md.heading('Edge Cases', { level: 2 }),
  md.code('code with `backticks` and other **stuff**'),
  md.code('`immediate backticks`'),
  md.codeBlock(`Before nested code block

\`\`\`

Nested code block
    
\`\`\`
    
After nested code block`),
  md.escape('regular text with `backtics` aa bbb'),
  md.escape('regular text <div>with html</div> <br/> <br/> <br/> and some <b>bold</b>'),
  md.escape('regular text { curly } [ square ] (round) # + - * / ! | \\'),
]);

console.log(output);
