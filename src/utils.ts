/**
 * Join blocks of text into a single markdown document (string).
 *
 * @param blocks - The blocks of text to join.
 * @returns Markdown document string.
 */
export function joinBlocks(blocks: string | readonly string[]): string {
  blocks = typeof blocks === 'string' ? [blocks] : blocks;

  return blocks.map(trimBlock).filter(Boolean).join('\n\n');
}

function trimBlock(block: string): string {
  return block.replace(/^\n+|\n+$/g, '');
}

export function prefixLines(text: string, prefix: string): string {
  const lines = text.split('\n');
  return lines.map((line) => `${prefix}${line}`).join('\n');
}
