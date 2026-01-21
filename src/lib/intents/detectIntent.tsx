import { INTENT_KEYWORDS } from './intentMap';
import { IntentPayload, IntentType } from './types';

export function detectIntent(text: string): IntentPayload {
  const lower = text.toLowerCase();

  for (const [intent, keywords] of Object.entries(INTENT_KEYWORDS)) {
    if (keywords.some(keyword => lower.includes(keyword))) {
      return {
        type: intent as IntentType,
        confidence: 0.85,
        data: {
          originalText: text,
        },
      };
    }
  }

  return {
    type: 'GENERAL_CHAT',
    confidence: 0.6,
  };
}
