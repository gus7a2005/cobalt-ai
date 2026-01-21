'use client';

import { ChatMessage as ChatMessageType } from '@/types/chat';
import ChatMessages from './ChatMessages';

interface Props {
  messages: ChatMessageType[];
}

export function ChatWindow({ messages }: Props) {
  return (
    <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
      {messages.map((message) => (
        <ChatMessages key={message.id} messages={messages} />
      ))}
    </div>
  );
}
