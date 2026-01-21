import { openai } from "@/lib/llm/openai";
import { ChatMessage } from "@/types/chat";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const messages: ChatMessage[] = body?.messages;

  if (!messages || !Array.isArray(messages)) {
    return new Response(
      JSON.stringify({ error: 'messages é obrigatório e deve ser um array' }),
      { status: 400, headers: { 'Content-Type': 'application/json' } }
    );
  }

  const encoder = new TextEncoder();

  const stream = new ReadableStream({
    async start(controller) {
      try {
        const openAIMessages = messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

        const response = await openai.responses.create({
          model: 'gpt-4.1-mini',
          stream: true,
          input: openAIMessages,
        });

        for await (const event of response) {
          if (event.type === 'response.output_text.delta') {
            controller.enqueue(encoder.encode(event.delta));
          }
          if (event.type === 'response.completed') {
            controller.close();
          }
        }
      } catch (error) {
        console.error('Erro no stream do chat:', error);
        controller.error(error);
      }
    },
  });

  return new Response(stream, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive',
    },
  });
}
