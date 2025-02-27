/**
 * Create an italic text.
 *
 * Markdown: `*text*`
 *
 * @param text - The text to be italicized.
 */
export function italic(text: string): string {
  return `*${text}*`;
}

/**
 * Create a bold text.
 *
 * Markdown: `**text**`
 *
 * @param text - The text to be bolded.
 */
export function bold(text: string): string {
  return `**${text}**`;
}

/**
 * Create a code text.
 *
 * Markdown: `code`
 *
 * @param text - The text to be marked as code.
 */
export function code(text: string): string {
  return `\`${text.replace(/`/g, '\\`')}\``;
}

/**
 * Create a link or autolink span.
 *
 * Markdown:
 * - `[text](url)` link when `text` is provided
 * - `<url>` autolink when `text` is not provided
 *
 * @param url - The URL to be linked.
 * @param text - The title for the link (optional).
 */
export function link(url: string, text?: string): string {
  return text ? `[${text}](${url})` : `<${url}>`;
}

/**
 * Create an image text.
 *
 * Markdown: `![text](url)`
 *
 * @param url - The URL of the image.
 * @param text - The description for the image (optional).
 */
export function image(url: string, text?: string): string {
  return `![${text ?? ''}](${url})`;
}
