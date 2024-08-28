export function prefixLines(text: string, prefix: string): string {
  const lines = text.split('\n');
  return lines.map((line) => `${prefix}${line}`).join('\n');
}
