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
});
