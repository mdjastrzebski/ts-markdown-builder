import { maxBackticks } from './utils';

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
 * Create a strikethrough text.
 *
 * Markdown: `~~text~~`
 *
 * @param text - The text to be struck through.
 */
export function strikethrough(text: string): string {
  return `~~${text}~~`;
}

/**
 * Create a code text.
 *
 * Markdown: `code`
 *
 * @param text - The text to be marked as code.
 */
export function code(text: string): string {
  const backticksCount = maxBackticks(text) + 1;
  const backticks = '`'.repeat(backticksCount);
  const frontPadding = text.startsWith('`') ? ' ' : '';
  const backPadding = text.endsWith('`') ? ' ' : '';
  return `${backticks}${frontPadding}${text}${backPadding}${backticks}`;
}

// https://spec.commonmark.org/0.31.2/#email-address
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

/**
 * Create a link or autolink span.
 *
 * Markdown:
 * - `[text](url)` link when `text` is provided
 * - `<url>` autolink when `text` is not provided and url is an email address or absolute URL
 * - `[url](url)` when `text` is not provided and url is a relative URL
 *
 * @param url - The URL to be linked.
 * @param text - The title for the link (optional).
 */
export function link(url: string, text?: string): string {
  return text
    ? `[${text}](${url})`
    : EMAIL_REGEX.test(url) || URL.canParse(url)
      ? `<${url}>`
      : `[${url}](${url})`;
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
