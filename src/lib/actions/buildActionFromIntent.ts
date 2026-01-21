import { IntentPayload } from '@/lib/intents/types';
import { ActionPayLoad } from './types';

export function buildActionFromIntent(
  intent: IntentPayload
): ActionPayLoad | null {
  if (intent.type === 'CREATE_POST') {
    return {
      id: crypto.randomUUID(),
      intent: intent.type,
      status: 'AWAITING_CONFIRMATION',
      title: 'Criar nova publicação',
      description: 'Criar um post para o LinkedIn com base na sua mensagem.',
      meta: intent.data,
    };
  }

  if (intent.type === 'SEARCH_PEOPLE') {
    return {
      id: crypto.randomUUID(),
      intent: intent.type,
      status: 'AWAITING_CONFIRMATION',
      title: 'Buscar pessoas no LinkedIn',
      description: 'Pesquisar perfis relevantes com base no seu objetivo.',
      meta: intent.data,
    };
  }

  return null;
}
