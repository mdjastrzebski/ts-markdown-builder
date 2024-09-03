export type TableOptions = {
  compact: boolean;
};

export function table(
  header: readonly string[],
  rows: readonly string[][],
  options?: TableOptions,
): string {
  if (header.length === 0) {
    return '';
  }

  // Escape the header and rows content
  header = header.map(escapeCellContent);
  rows = rows.map((row) => row.map(escapeCellContent));

  const widths = !options?.compact ? getColumnsWidth(header, rows) : header.map(() => 1);
  const separators = header.map((_, i) => '-'.repeat(widths[i] ?? 0));

  return [
    renderRow(header, widths),
    renderRow(separators, widths),
    ...rows.map((row) => renderRow(row, widths)),
  ].join('\n');
}

function getColumnsWidth(header: readonly string[], rows: readonly string[][]): number[] {
  return header.map((_, index) => getColumnWidth(header, rows, index));
}

function getColumnWidth(
  header: readonly string[],
  rows: readonly string[][],
  index: number,
): number {
  return Math.max(header[index]?.length ?? 0, ...rows.map((row) => row[index]?.length ?? 0));
}

function renderRow(row: readonly string[], widths: readonly number[]): string {
  const paddedCells = row.map((cell, index) => cell.padEnd(widths[index] ?? 0));
  return `| ${paddedCells.join(' | ')} |`;
}

function escapeCellContent(cell: string): string {
  return cell.replace(/\|/g, '\\|').replace(/\n/g, '<br/>');
}
