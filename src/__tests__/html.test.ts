import * as md from '..';

describe('disclosure', () => {
  it('supports single paragraph', () => {
    const result = md.disclosure('Summary', 'This is a paragraph.');
    expect(result).toMatchInlineSnapshot(`
      "<details>
      <summary>Summary</summary>
      This is a paragraph.
      </details>"
    `);
  });

  it('supports multiple paragraphs', () => {
    const result = md.disclosure(
      'Summary',
      md.joinBlocks(['This is paragraph 1.', 'This is paragraph 2.']),
    );
    expect(result).toMatchInlineSnapshot(`
      "<details>
      <summary>Summary</summary>
      This is paragraph 1.

      This is paragraph 2.
      </details>"
    `);
  });
});
