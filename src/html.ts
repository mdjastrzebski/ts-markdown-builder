export function disclosure(title: string, content: string[] | string): string {
  if (typeof content === 'string') {
    content = [content];
  }

  return `<details>\n<summary>${title}</summary>\n${content.join('\n\n')}\n</details>`;
}
