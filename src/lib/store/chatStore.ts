import { create } from "zustand";

export interface Message {
  role: "user" | "assistant" | "system";
  content: string;
}

interface ChatState {
  messages: Message[];
  isOpen: boolean;
  isLoading: boolean;
  addMessage: (message: Message) => void;
  setIsOpen: (isOpen: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  clearMessages: () => void;
  cleanupMessages: () => void;
}

export const useChatStore = create<ChatState>()((set, get) => ({
  messages: [],
  isOpen: false,
  isLoading: false,
  addMessage: (message) =>
    set((state) => ({ messages: [...state.messages, message] })),
  setIsOpen: (isOpen) => set({ isOpen }),
  setIsLoading: (isLoading) => set({ isLoading }),
  clearMessages: () => set({ messages: [] }),
  cleanupMessages: () => {
    const state = get();
    const validMessages = state.messages.filter(
      (message) => message && message.role && message.content
    );
    set({ messages: validMessages });
  },
}));
