import { blockquote, heading, horizontalRule, orderedList, unorderedList } from '../block';

describe('heading', () => {
  it('renders heading levels correctly', () => {
    expect(heading('Hello, World!', 1)).toBe('# Hello, World!');
    expect(heading('Hello, World!', 2)).toBe('## Hello, World!');
    expect(heading('Hello, World!', 3)).toBe('### Hello, World!');
    expect(heading('Hello, World!', 4)).toBe('#### Hello, World!');
    expect(heading('Hello, World!', 5)).toBe('##### Hello, World!');
    expect(heading('Hello, World!', 6)).toBe('###### Hello, World!');
  });

  it('renders default level', () => {
    expect(heading('Hello, World!')).toBe('# Hello, World!');
  });
});

describe('blockquote', () => {
  it('renders singleline correctly', () => {
    expect(blockquote('Hello, World!')).toBe('> Hello, World!');
  });
  it('renders multiline correctly', () => {
    expect(blockquote('Hello\nWorld\net al.!')).toMatchInlineSnapshot(`
      "> Hello
      > World
      > et al.!"
    `);
  });
});

describe('orderedList', () => {
  it('renders correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    expect(orderedList(items)).toMatchInlineSnapshot(`
      "1. Item 1
      2. Item 2
      3. Item 3"
    `);
  });
});

describe('unorderedList', () => {
  it('renders correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    expect(unorderedList(items)).toMatchInlineSnapshot(`
      "- Item 1
      - Item 2
      - Item 3"
    `);
  });
});

describe('horizontalRule', () => {
  it('renders correctly', () => {
    expect(horizontalRule).toMatchInlineSnapshot(`
      "
      ---
      "
    `);
  });
});
