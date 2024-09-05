import { type Content, handleOutput, renderContent } from './context';
import { prefixLines } from './utils';

// Container blocks
export function paragraph(text: string): string {
  return handleOutput(text);
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
export function blockquote(content: Content): string {
  const text = renderContent(content);
  const output = prefixLines(text, '> ');
  return handleOutput(output);
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
  const output = items.map((item) => `- ${item}`).join('\n');
  return handleOutput(output);
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
  const output = items.map((item, index) => `${index + 1}. ${item}`).join('\n');
  return handleOutput(output);
}

/**
 * Create a horizontal rule block.
 *
 * Markdown: `---`
 */
export const horizontalRule = '---';

/**
 * Create a heading block.
 * Markdown: `# Heading`
 *
 * @param text - The text of the heading.
 * @param level - The level of the heading (defaults to 1).
 */
export function heading(text: string, level: number = 1): string {
  const output = `${'#'.repeat(level)} ${text}`;
  return handleOutput(output);
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
  const output = `\`\`\`\n${content}\n\`\`\``;
  return handleOutput(output);
}
