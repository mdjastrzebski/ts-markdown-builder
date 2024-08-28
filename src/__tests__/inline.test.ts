import { bold, italic, lineBreak } from '../inline';

describe('bold', () => {
  it('renders correctly', () => {
    expect(bold('Hello, World!')).toBe('**Hello, World!**');
  });
});

describe('italic', () => {
  it('renders correctly', () => {
    expect(italic('Hello, World!')).toBe('*Hello, World!*');
  });
});

describe('lineBreak', () => {
  it('renders correctly', () => {
    expect(lineBreak).toBe('  \n');
  });
});
