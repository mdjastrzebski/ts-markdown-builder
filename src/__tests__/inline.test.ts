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

describe('code', () => {
  it('renders correctly', () => {
    expect(md.code('Hello, World!')).toBe('`Hello, World!`');
  });

  it('handles backticks', () => {
    expect(md.code('Hello, `World`!')).toBe('``Hello, `World`!``');
    expect(md.code('`single`')).toBe('`` `single` ``');
    expect(md.code('``nested``')).toBe('``` ``nested`` ```');
    expect(md.code('`a` ``b`` ```c```')).toBe('```` `a` ``b`` ```c``` ````');
  });
});
