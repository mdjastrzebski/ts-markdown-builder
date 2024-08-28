import * as md from '..';

test('document basic syntax', () => {
  const result = md.document([
    md.heading('Hello, world!'),
    'This is a paragraph.',
    'This is another paragraph.',
  ]);
  expect(result).toMatchInlineSnapshot(`
    "# Hello, world!

    This is a paragraph.

    This is another paragraph."
  `);
});

test('document empty elements', () => {
  const elements: string[] = [];
  expect(md.document(elements)).toBe('');
});
