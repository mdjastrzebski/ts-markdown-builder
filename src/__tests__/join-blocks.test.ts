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
      md.unorderedList(['Item 1', 'Item 2', 'Item 3']),
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
});
