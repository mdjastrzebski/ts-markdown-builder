import * as md from '..';

describe('joinBlocks', () => {
  it('basic case', () => {
    const result = md.joinBlocks([
      md.heading('Heading'),
      'This is a paragraph.',
      'This is another paragraph.',
      md.horizontalRule,
      md.heading('Heading 2'),
      'This is a paragraph.',
      md.orderedList(['Item 1', 'Item 2', 'Item 3']),
      md.list(['Item 1', 'Item 2', 'Item 3']),
    ]);
    expect(result).toMatchInlineSnapshot(`
      "# Heading

      This is a paragraph.

      This is another paragraph.

      ---

      # Heading 2

      This is a paragraph.

      1. Item 1
      2. Item 2
      3. Item 3

      - Item 1
      - Item 2
      - Item 3"
    `);
  });

  it('empty blocks', () => {
    expect(md.joinBlocks([])).toBe('');
  });

  it('README example', () => {
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
    expect(output).toMatchInlineSnapshot(`
      "# Welcome to TS Markdown Builder

      It's an easy to use modern markdown generator.

      It supports:

      - **bold** and *italic*
      - \`code\` spans and code blocks
      - unordered and ordered lists
      - blockquotes
      - and more!"
    `);
  });
});

describe('joinLines', () => {
  it('basic case', () => {
    const result = md.joinLines(['Line 1', 'Line 2', 'Line 3']);
    expect(result).toMatchInlineSnapshot(`"Line 1<br/>Line 2<br/>Line 3"`);
  });

  it('empty lines', () => {
    expect(md.joinLines([])).toBe('');
  });
});
