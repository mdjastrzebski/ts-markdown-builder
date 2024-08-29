/**
 * Create a line break.
 *
 * Markdown/Html:: `<br/>`
 */
export const lineBreak = '<br/>';

export type DisclosureOptions = {
  open?: boolean;
};

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
export function disclosure(title: string, content: string, options?: DisclosureOptions): string {
  return `<details${
    options?.open ? ' open' : ''
  }>\n<summary>${title}</summary>\n${content}\n</details>`;
}
