// Ref: https://www.markdownguide.org/basic-syntax/

export const lineBreak = '  \n';

export function italic(text: string): string {
  return `*${text}*`;
}

export function bold(text: string): string {
  return `**${text}**`;
}

export function code(text: string): string {
  return `\`${text}\``;
}

export function link(url: string, text?: string): string {
  return text ? `[${text}](${url})` : `<${url}>`;
}

export function image(url: string, text?: string): string {
  return `![${text ?? ''}](${url})`;
}
