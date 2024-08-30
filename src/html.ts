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
  // The extra new lines in <summary> and <details> are required for proper rendering in GitHub.
  // See https://gist.github.com/scmx/eca72d44afee0113ceb0349dd54a84a2

  return `<details${options?.open ? ' open' : ''}>
<summary>\n${title}\n\n</summary>
\n${content}\n  
</details>`;
}
