import * as md from '..';

describe('heading', () => {
  it('renders heading levels correctly', () => {
    expect(md.heading('Hello, World!', 1)).toBe('# Hello, World!');
    expect(md.heading('Hello, World!', 2)).toBe('## Hello, World!');
    expect(md.heading('Hello, World!', 3)).toBe('### Hello, World!');
    expect(md.heading('Hello, World!', 4)).toBe('#### Hello, World!');
    expect(md.heading('Hello, World!', 5)).toBe('##### Hello, World!');
    expect(md.heading('Hello, World!', 6)).toBe('###### Hello, World!');
  });

  it('renders default level', () => {
    expect(md.heading('Hello, World!')).toBe('# Hello, World!');
  });
});

describe('blockquote', () => {
  it('renders text correctly', () => {
    expect(md.blockquote('Hello, World!')).toBe('> Hello, World!');
  });

  it('renders multiline text correctly', () => {
    expect(md.blockquote('Hello\nWorld\net al.!')).toMatchInlineSnapshot(`
      "> Hello
      > World
      > et al.!"
    `);
  });

  it('renders nested blocks correctly', () => {
    expect(
      md.blockquote(() => {
        md.heading('Header', 1);
        md.paragraph('Line 1\nLine 2');
        md.list(['Item', 'Item', 'Item']);
        md.orderedList(['Item 1', 'Item 2', 'Item 3']);
      }),
    ).toMatchInlineSnapshot(`
      "> # Header
      > 
      > Line 1
      > Line 2
      > 
      > - Item
      > - Item
      > - Item
      > 
      > 1. Item 1
      > 2. Item 2
      > 3. Item 3"
    `);
  });
});

describe('list', () => {
  it('renders text items correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    expect(md.list(items)).toMatchInlineSnapshot(`
      "- Item 1
      - Item 2
      - Item 3"
    `);
  });
});

describe('orderedList', () => {
  it('renders correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    expect(md.orderedList(items)).toMatchInlineSnapshot(`
      "1. Item 1
      2. Item 2
      3. Item 3"
    `);
  });
});

describe('horizontalRule', () => {
  it('renders correctly', () => {
    expect(md.horizontalRule).toMatchInlineSnapshot(`"---"`);
  });
});
