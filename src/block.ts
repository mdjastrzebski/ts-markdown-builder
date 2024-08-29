import { prefixLines } from './utils';

// Ref: https://www.markdownguide.org/basic-syntax/

export const horizontalRule = '\n---\n';

export function heading(text: string, level: number = 1): string {
  return `${'#'.repeat(level)} ${text}`;
}

export function blockquote(text: string): string {
  return prefixLines(text, '> ');
}

export function codeBlock(text: string): string {
  return `\`\`\`\n${text}\n\`\`\``;
}

export function list(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

export function orderedList(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}
