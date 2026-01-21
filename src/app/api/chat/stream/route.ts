import { NextRequest, NextResponse } from "next/server";
import { ChatMessage } from "@/types/chat";
import { isActionConfirmation } from "@/lib/actions/isActionConfirmation";
import { executeAction } from "@/lib/actions/executeAction";
import { IntentPayload } from "@/lib/intents/types";

let pendingIntent: IntentPayload | null = null;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const messages: ChatMessage[] = body.messages;

    if (!Array.isArray(messages)) {
      return NextResponse.json(
        { error: "messages é obrigatório e deve ser um array" },
        { status: 400 },
      );
    }

    const lastMessage = messages[messages.length - 1];

    if (!lastMessage) {
      return NextResponse.json({ error: "Mensagem inválida" }, { status: 400 });
    }

    /**
     * 1️⃣ Confirmação de ação pendente
     */
    if (
      pendingIntent &&
      lastMessage.role === "user" &&
      isActionConfirmation(lastMessage.content)
    ) {
      // pendingIntent já é um IntentPayload compatível com executeAction
      const result = executeAction(pendingIntent);

      pendingIntent = null;

      return NextResponse.json({
        role: "assistant",
        content: result,
      });
    }

    /**
     * 2️⃣ Nova intent detectada
     */
    if (lastMessage.intent && lastMessage.intent.confidence >= 0.6) {
      pendingIntent = lastMessage.intent;

      return NextResponse.json({
        role: "assistant",
        content:
          "Entendi o que você quer fazer. Deseja que eu execute essa ação agora?",
      });
    }

    /**
     * 3️⃣ Fallback
     */
    return NextResponse.json({
      role: "assistant",
      content:
        "Posso te ajudar com LinkedIn, carreira, networking ou criação de conteúdo.",
    });
  } catch (error) {
    console.error("[CHAT_ROUTE_ERROR]", error);

    return NextResponse.json(
      { error: "Erro interno no servidor" },
      { status: 500 },
    );
  }
}
