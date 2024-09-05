export type ContentBuilder = () => void;
export type Content = string | ContentBuilder;

/**
 * Content container
 */
export class Container {
  private content: string[] = [];

  add(content: string): void {
    this.content.push(content);
  }

  toString(): string {
    return this.content.join('\n\n');
  }
}

const contextState: Container[] = [];

export function renderContent(content: Content): string {
  if (typeof content === 'string') {
    return content;
  }

  const container = new Container();
  contextState.push(container);
  content();
  contextState.pop();
  return container.toString();
}

export function handleOutput(content: string): string {
  const container = contextState.at(-1);
  if (container) {
    container.add(content);
  }

  return content;
}
