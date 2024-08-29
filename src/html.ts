/**
 * Create a line break.
 *
 * Markdown/Html:: `<br/>`
 */
export const lineBreak = '<br/>';

/**
 * Options for the `disclosure` block.
 */
export type DisclosureOptions = {
  /**
   * Whether the disclosure block should be open by default.
   */
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
 * @param options - The options for the disclosure.
 */
export function disclosure(title: string, content: string, options?: DisclosureOptions): string {
  return `<details${
    options?.open ? ' open' : ''
  }>\n<summary>${title}</summary>\n${content}\n</details>`;
}
