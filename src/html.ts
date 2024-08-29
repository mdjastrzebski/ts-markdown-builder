/**
 * Create a line break.
 *
 * Markdown/Html:: `<br/>`
 */
export const lineBreak = '<br/>';

/**
 * Create a disclosure block.
 *
 * Markdown/Html:
 * ```
 * <details>
 *   <summary>Title</summary>
 *   Content
 * </details>
 * ```
 *
 * @param title - The title of the disclosure.
 * @param content - The content of the disclosure.
 */
export function disclosure(title: string, content: string): string {
  return `<details>\n<summary>${title}</summary>\n${content}\n</details>`;
}
