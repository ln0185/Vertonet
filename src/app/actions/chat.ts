"use server";

import { ChatService } from "@/lib/services/chatService";
import { Message } from "@/lib/services/chatService";

export async function handleChatMessage(
  messages: Message[],
  language: string = "is"
) {
  try {
    // Validate messages array
    if (!messages || !Array.isArray(messages)) {
      throw new Error("Messages array is required and must be an array");
    }

    // Validate individual messages
    for (const message of messages) {
      if (!message.role || !message.content) {
        throw new Error(
          "Each message must have 'role' and 'content' properties"
        );
      }

      if (!["user", "assistant", "system"].includes(message.role)) {
        throw new Error(
          "Message role must be 'user', 'assistant', or 'system'"
        );
      }
    }

    // Get the last user message
    const lastUserMessage = messages.filter((m) => m.role === "user").pop();
    if (!lastUserMessage) {
      throw new Error("No user message found");
    }

    // Process the message using ChatService
    const chatService = new ChatService();
    const responseMessage = await chatService.processMessage(
      messages,
      language
    );

    return {
      message: responseMessage,
      usage: { total_tokens: responseMessage.content.length },
    };
  } catch (error) {
    console.error("Chat Action Error:", error);
    throw error;
  }
}
