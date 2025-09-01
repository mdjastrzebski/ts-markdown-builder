import { joinBlocks, maxBackticks, prefixLines } from './utils';

/**
 * Create a horizontal rule block.
 *
 * Markdown: `---`
 */
export const horizontalRule = '---';

type HeadingOptions = {
  level: number;
};

/**
 * Create a heading block.
 * Markdown: `# Heading`
 *
 * @param text - The text of the heading.
 * @param level - The level of the heading (defaults to 1).
 */
export function heading(text: string, options?: HeadingOptions): string {
  const level = options?.level ?? 1;
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
export function blockquote(content: string | readonly string[]): string {
  return prefixLines(joinBlocks(content), '> ');
}

type CodeBlockOptions = {
  language: string;
};

/**
 * Create a code block.
 *
 * Markdown:
 * ```js
 * Content
 * ```
 *
 * @param content - The content of the code block.
 * @param language - The language of the code block.
 */
export function codeBlock(content: string, options?: CodeBlockOptions): string {
  const language = options?.language ?? '';
  const backticks = Math.max(maxBackticks(content), 2) + 1;
  return '`'.repeat(backticks) + language + '\n' + content + '\n' + '`'.repeat(backticks);
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
export function list(items: readonly string[]): string {
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
export function orderedList(items: readonly string[]): string {
  return items.map((item, index) => `${index + 1}. ${item}`).join('\n');
}
