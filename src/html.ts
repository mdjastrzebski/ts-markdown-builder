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
  // Add extra with lines to render header properly. New line should not be added for regular text
  // as it messes up the formatting.
  const headerHack = title.startsWith('#') ? '\n\n' : '';

  // The extra new lines in <summary> and <details> are required for proper rendering in GitHub.
  // See https://gist.github.com/scmx/eca72d44afee0113ceb0349dd54a84a2
  return `<details${options?.open ? ' open' : ''}>
<summary>${headerHack}${title}${headerHack}</summary>
\n${content}\n  
</details>`;
}
