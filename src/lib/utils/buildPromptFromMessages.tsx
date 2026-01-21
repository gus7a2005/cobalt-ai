import { ChatMessage } from '@/types/chat';

export function buildPromptFromMessages(
  systemPrompt: string,
  messages: ChatMessage[]
): string {
  const history = messages
    .map((message) => {
      switch (message.role) {
        case 'user':
          return `Usuário: ${message.content}`;
        case 'assistant':
          return `Assistente: ${message.content}`;
        default:
          return '';
      }
    })
    .filter(Boolean)
    .join('\n\n');

  return `
${systemPrompt}

${history}

Assistente:
`.trim();
}
