import * as md from '..';

describe('heading', () => {
  it('renders heading levels correctly', () => {
    expect(md.heading('Hello, World!', { level: 1 })).toBe('# Hello, World!');
    expect(md.heading('Hello, World!', { level: 2 })).toBe('## Hello, World!');
    expect(md.heading('Hello, World!', { level: 3 })).toBe('### Hello, World!');
    expect(md.heading('Hello, World!', { level: 4 })).toBe('#### Hello, World!');
    expect(md.heading('Hello, World!', { level: 5 })).toBe('##### Hello, World!');
    expect(md.heading('Hello, World!', { level: 6 })).toBe('###### Hello, World!');
  });

  it('renders default level', () => {
    expect(md.heading('Hello, World!')).toBe('# Hello, World!');
  });
});

describe('blockquote', () => {
  it('renders singleline correctly', () => {
    expect(md.blockquote('Hello, World!')).toBe('> Hello, World!');
  });
  it('renders multiline correctly', () => {
    expect(md.blockquote('Hello\nWorld\net al.!')).toMatchInlineSnapshot(`
      "> Hello
      > World
      > et al.!"
    `);
  });
});

describe('list', () => {
  it('renders correctly', () => {
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
