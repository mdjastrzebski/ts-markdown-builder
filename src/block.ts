import { prefixLines } from './utils';

/**
 * Create a horizontal rule block.
 *
 * Markdown: `---`
 */
export const horizontalRule = '\n---\n';

/**
 * Create a heading block.
 * Markdown: `# Heading`
 *
 * @param text - The text of the heading.
 * @param level - The level of the heading (defaults to 1).
 */
export function heading(text: string, level: number = 1): string {
  return `${'#'.repeat(level)} ${text}`;
}

/**
 * Create a blockquote block.
 *
 * Markdown:
 * ```
 * > Content
 * > Content
 * ```
 *
 * @param text - The content of the blockquote.
 */
export function blockquote(content: string): string {
  return prefixLines(content, '> ');
}

/**
 * Create a code block.
 *
 * Markdown:
 * ````
 * ```
 * Content
 * ```
 * ````
 *
 * @param content - The content of the code block.
 */
export function codeBlock(content: string): string {
  return `\`\`\`\n${content}\n\`\`\``;
}

/**
 * Create an unordered list block.
 *
 * Markdown:
 * ```
 * - Item
 * - Item
 * ```
 *
 * @param items - The items of the list.
 */
export function list(items: string[]): string {
  return items.map((item) => `- ${item}`).join('\n');
}

/**
 * Create an ordered list block.
 *
 * Markdown:
 * ```
 * 1. Item
 * 2. Item
 * ```
 *
 * @param items - The items of the list.
 */
export function orderedList(items: string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}
