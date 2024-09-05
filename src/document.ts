import { type Content, renderContent } from './context';

export function document(builder: Content): string {
  return renderContent(builder);
}
