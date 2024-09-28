/**
 * Create a line break.
 *
 * Markdown (as HTML): `<br/>`
 */
export const lineBreak = '<br/>';

/**
 * Options for the `disclosure` block.
 */
export type DisclosureOptions = {
  /**
   * Whether the disclosure block should be open by default (defaults to false).
   */
  open?: boolean;
};

/**
 * Create a disclosure block.
 *
 * Markdown (as HTML):
 * ```
 * <details>
 *   <summary>Title</summary>
 *   Content
 * </details>
 * ```
 *
 * @param title - The title of the disclosure (text only or markdown heading: `# heading`).
 * @param content - The content of the disclosure (can include markdown).
 * @param options - The options for the disclosure.
 */
export function disclosure(title: string, content: string, options?: DisclosureOptions): string {
  // Add extra with lines to render header properly. New line should not be added for regular text
  // as it messes up the formatting.
  const headerHack = title.startsWith('#') ? '\n\n' : '';

  return `<details${options?.open ? ' open' : ''}>
<summary>${headerHack}${title}${headerHack}</summary>
${escapeMarkdownInHtml(content)}
</details>`;
}

// Blank lines are required for rendering a markdown section inside html tag.
// See https://gist.github.com/scmx/eca72d44afee0113ceb0349dd54a84a2
function escapeMarkdownInHtml(markdown: string): string {
  return `\n${markdown}\n`;
}
