import * as md from '..';

describe('bold', () => {
  it('renders correctly', () => {
    expect(md.bold('Hello, World!')).toBe('**Hello, World!**');
  });
});

describe('italic', () => {
  it('renders correctly', () => {
    expect(md.italic('Hello, World!')).toBe('*Hello, World!*');
  });
});

describe('strikethrough', () => {
  it('renders correctly', () => {
    expect(md.strikethrough('Hello, World!')).toBe('~~Hello, World!~~');
  });
});

describe('link', () => {
  it('renders correctly', () => {
    expect(md.link('https://example.com', 'Example')).toBe('[Example](https://example.com)');
  });

  it('uses url as text when text is not provided', () => {
    expect(md.link('https://example.com')).toBe('[https://example.com](https://example.com)');
    expect(md.link('./docs/page.md')).toBe('[./docs/page.md](./docs/page.md)');
    expect(md.link('/about')).toBe('[/about](/about)');
  });
});

describe('code', () => {
  it('renders correctly', () => {
    expect(md.code('Hello, World!')).toBe('`Hello, World!`');
  });

  it('handles backticks', () => {
    expect(md.code('Hello, `World`!')).toBe('``Hello, `World`!``');
    expect(md.code('`single`')).toBe('`` `single` ``');
    expect(md.code('``nested``')).toBe('``` ``nested`` ```');
    expect(md.code('html`<div />`')).toBe('`` html`<div />` ``');
    expect(md.code('`users`.id')).toBe('`` `users`.id ``');
    expect(md.code('`a ')).toBe('`` `a  ``');
    expect(md.code(' a ')).toBe('`  a  `');
    expect(md.code(' ')).toBe('` `');
    expect(md.code('`a` ``b`` ```c```')).toBe('```` `a` ``b`` ```c``` ````');
  });
});
