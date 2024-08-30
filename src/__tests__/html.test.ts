import * as md from '..';

describe('lineBreak', () => {
  it('renders correctly', () => {
    expect(`Line 1${md.lineBreak}Line 2`).toBe('Line 1<br/>Line 2');
  });
});

describe('disclosure', () => {
  it('supports single paragraph', () => {
    const result = md.disclosure('Summary', 'This is a paragraph.');
    expect(result).toMatchInlineSnapshot(`
      "<details>
      <summary>
      Summary

      </summary>

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
      <summary>
      Summary

      </summary>

      This is paragraph 1.

      This is paragraph 2.
        
      </details>"
    `);
  });

  it('supports open state', () => {
    const result = md.disclosure('Summary', 'This is a paragraph.', { open: true });
    expect(result).toMatchInlineSnapshot(`
      "<details open>
      <summary>
      Summary

      </summary>

      This is a paragraph.
        
      </details>"
    `);
  });
});
