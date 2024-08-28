export function table(headers: string[], rows: string[][]): string {
  if (headers.length === 0 && rows.length === 0) {
    return '';
  }

  const widths = getColumnsWidth(headers, rows);

  return [
    joinCells(padCells(headers, widths)),
    joinCells(headers.map((_, index) => '-'.repeat(widths[index] ?? 0))),
    ...rows.map((row) => joinCells(padCells(row, widths))),
  ].join('\n');
}

function getColumnsWidth(headers: string[], rows: string[][]): number[] {
  return headers.map((_, index) => getColumnWidth(headers, rows, index));
}

function getColumnWidth(headers: string[], rows: string[][], index: number): number {
  return Math.max(headers[index]?.length ?? 0, ...rows.map((row) => row[index]?.length ?? 0));
}

function padCells(cells: string[], widths: number[]): string[] {
  return cells.map((cell, index) => cell.padEnd(widths[index] ?? 0));
}

function joinCells(cells: string[]): string {
  return `| ${cells.join(' | ')} |`;
}
