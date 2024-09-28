#!/usr/bin/env node

import * as md from '../dist/esm/index.mjs';

const table = md.table(
  ['A', 'B', 'C'],
  [
    ['1', '2', '3'],
    ['4', '5', '6'],
  ],
);

const output = [
  md.heading('Heading 1', { level: 1 }),
  md.heading('Heading 2', { level: 2 }),
  md.heading('Heading 3', { level: 3 }),
  md.heading('Heading 4', { level: 4 }),
  md.heading('Heading 5', { level: 5 }),
  md.heading('Heading 6', { level: 6 }),

  md.heading('Lists', { level: 3 }),
  md.list(['Item 1', 'Item 2', 'Item 3']),
  md.orderedList(['Item 1', 'Item 2', 'Item 3']),

  md.heading('Blocks', { level: 3 }),
  md.blockquote('This is a blockquote.\nIt can span multiple lines.'),
  md.codeBlock("console.log('Hello, world!');\nconsole.log('Hello markdown!"),
  md.horizontalRule,

  md.heading('Inline', { level: 3 }),
  md.list([
    md.bold('bold'),
    md.italic('Italic'),
    md.code('code'),
    md.link('https://example.com', 'link'),
    md.link('https://example.com'),
    md.image('https://markdown-here.com/img/icon64.png', "Markdown Logo"),
  ]),
  md.heading('HTML', { level: 3 }),
  md.heading('Disclosure', { level: 4 }),
  md.disclosure('Summary', 'This is a disclosure.'),
  md.disclosure(`AAA ${md.bold("Bold")} and ${md.italic("Italic")}`, 'This is a disclosure.'),

  md.disclosure(md.heading('Heading 1', { level: 1 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 2', { level: 2 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 3', { level: 3 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 4', { level: 4 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 5', { level: 5 }), 'This is paragraph.'),
  md.disclosure(md.heading('Heading 6', { level: 6 }), 'This is paragraph.'),

  md.disclosure(md.heading('Table In Details', { level: 3 }), table),

  md.heading('Tables', { level: 3 }),
  table,
].join('\n\n');

console.log(output);
