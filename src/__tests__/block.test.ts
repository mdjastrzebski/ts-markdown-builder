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
    expect(blockquote('Hello\nWorld\net al.!')).toBe(`> Hello\n> World\n> et al.!`);
  });
});

describe('orderedList', () => {
  it('renders correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const expected = '1. Item 1\n2. Item 2\n3. Item 3';
    expect(orderedList(items)).toBe(expected);
  });
});

describe('unorderedList', () => {
  it('renders correctly', () => {
    const items = ['Item 1', 'Item 2', 'Item 3'];
    const expected = '- Item 1\n- Item 2\n- Item 3';
    expect(unorderedList(items)).toBe(expected);
  });
});

describe('horizontalRule', () => {
  it('renders correctly', () => {
    expect(horizontalRule).toBe('\n---\n');
  });
});
