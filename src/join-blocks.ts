export function joinBlocks(blocks: string[]): string {
  return blocks.map(trimBlock).join('\n\n');
}

function trimBlock(block: string): string {
  return block.replace(/^\n+|\n+$/g, '');
}
