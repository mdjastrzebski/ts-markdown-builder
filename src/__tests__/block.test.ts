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

  it('renders nested blockquote correctly', () => {
    expect(
      md.blockquote([
        'Single indent',
        md.blockquote([
          'Double indent', //
          md.blockquote('Triple indent'),
        ]),
        'Single indent',
      ]),
    ).toBe(`> Single indent
> 
> > Double indent
> > 
> > > Triple indent
> 
> Single indent`);
  });

  it('renders other block elements', () => {
    expect(
      md.blockquote([
        md.heading('Heading'),
        md.codeBlock('Code Line 1\nCode Line 2'),
        md.list(['Item 1', 'Item 2', 'Item 3']),
      ]),
    ).toBe(`> # Heading
> 
> \`\`\`
> Code Line 1
> Code Line 2
> \`\`\`
> 
> - Item 1
> - Item 2
> - Item 3`);
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

describe('codeBlock', () => {
  it('renders correctly', () => {
    expect(md.codeBlock('Hello, World!')).toBe('```\nHello, World!\n```');
  });

  it('renders custom syntax', () => {
    expect(md.codeBlock('console.log("Hello, World!")', { syntax: 'js' })).toBe(
      '```js\nconsole.log("Hello, World!")\n```',
    );
  });

  it('handles backticks', () => {
    expect(md.codeBlock('Hello, `World`!')).toBe('```\nHello, `World`!\n```');
    expect(md.codeBlock('Hello, ``World``!')).toBe('```\nHello, ``World``!\n```');
    expect(md.codeBlock('```AAA BBB```')).toBe('````\n```AAA BBB```\n````');
  });
});
