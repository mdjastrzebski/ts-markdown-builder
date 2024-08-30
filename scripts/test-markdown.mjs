#!/usr/bin/env node
/* eslint-disable prettier/prettier */

import * as md from '../dist/esm/index.mjs';

const output = md.joinBlocks([
  md.heading('Heading 1', 1),
  md.heading('Heading 2', 2),
  md.heading('Heading 3', 3),
  md.heading('Heading 4', 4),
  md.heading('Heading 5', 5),
  md.heading('Heading 6', 6),

  md.heading('Lists', 3),
  md.list(['Item 1', 'Item 2', 'Item 3']),
  md.orderedList(['Item 1', 'Item 2', 'Item 3']),

  md.heading('Blocks', 3),
  md.blockquote('This is a blockquote.\nIt can span multiple lines.'),
  md.codeBlock("console.log('Hello, world!');\nconsole.log('Hello markdown!"),
  md.horizontalRule,

  md.heading('Inlines', 3),
  md.list([
    md.bold('bold'),
    md.italic('Italic'),
    md.code('code'),
    md.link('https://example.com', 'link'),
    md.link('https://example.com'),
    md.image('https://example.com/image.png'),
  ]),

  md.heading('HTML', 3),
  md.heading('Disclosure', 4),
  md.disclosure('Summary', 'This is a disclosure.'),
  md.disclosure(
    md.heading('Heading', 4),
    md.joinBlocks(['This is paragraph 1.', 'This is paragraph 2.'])
  ),

  md.heading('Tables', 3),
  md.table(
    ['A', 'B', 'C'],
    [
      ['1', '2', '3'],
      ['4', '5', '6'],
    ],
  )
]);

console.log(output);
