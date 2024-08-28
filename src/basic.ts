// Ref: https://www.markdownguide.org/basic-syntax/

export function heading(text: string, level: number = 1): string {
  return `${'#'.repeat(level)} ${text}`;
}

export function bold(text: string): string {
  return `**${text}**`;
}

export function italic(text: string): string {
  return `*${text}*`;
}

export function blockquote(text: string): string {
  const lines = text.split('\n');
  return lines.map((line) => `> ${line}`).join('\n');
}

export function orderedList(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}

export function unorderedList(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

export function link(text: string, url: string): string {
  return `[${text}](${url})`;
}

export function image(text: string, url: string): string {
  return `![${text}](${url})`;
}

export function codeBlock(text: string): string {
  return `\`\`\`\n${text}\n\`\`\``;
}

export const lineBreak = '  \n';

export const horizontalRule = '\n---\n';

export function escapeText(text: string): string {
  return text.replace(/([*_`])/g, '\\$1');
}
