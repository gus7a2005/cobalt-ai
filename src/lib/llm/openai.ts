import OpenAI from 'openai';
import { LLMStreamResponse } from './types';
import { systemPrompt } from '@/lib/ai/systemPrompt';

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function openAIStream(
  userMessage: string
): Promise<LLMStreamResponse> {
  const stream = await openai.responses.stream({
    model: 'gpt-4.1-mini',
    input: [
      { role: 'system', content: systemPrompt },
      { role: 'user', content: userMessage },
    ],
  });

  async function* generator() {
    for await (const event of stream) {
      if (event.type === 'response.output_text.delta') {
        yield event.delta;
      }
    }
  }

  return { stream: generator() };
}
