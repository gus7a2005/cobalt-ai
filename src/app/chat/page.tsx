'use client';

import { useChatStream } from "@/hooks/useChatStream";
import ChatWindow from "./ChatWindow";
import ChatMessages from "@/components/chat/ChatMessages";
import ChatInput from "@/components/chat/ChatInput";


export default function ChatPage() {
    const { messages, sendMessage, isStreaming } = useChatStream();

    return (
        <main className="flex h-screen flex-col bg-zinc-900">
            <ChatMessages messages={messages} />
            <ChatInput onSend={sendMessage} disabled={isStreaming} />
        </main>
    )
}