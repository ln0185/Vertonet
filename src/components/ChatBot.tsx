"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "./Button";
import { useChatStore, Message } from "../lib/store/chatStore";
import { useTranslation } from "react-i18next";
import "../lib/i18n/config";
import Image from "next/image";

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: ${(props) => props.theme.space.lg};
  right: ${(props) => props.theme.space.lg};
  z-index: 1000;
`;

const ChatbotIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
`;

const ChatButton = styled(Button)`
  width: auto;
  min-width: 4rem;
  height: 3.5rem;
  border-radius: 2rem;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.25rem 1rem ${(props) => props.theme.colors.shadow.card};
  font-size: 3.5rem;
  font-weight: 300;
`;

const IconWrapper = styled.div<{ $isHover?: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  transition: opacity 0.2s ease;
  opacity: ${(props) => (props.$isHover ? 0 : 1)};

  button:hover & {
    opacity: ${(props) => (props.$isHover ? 1 : 0)};
  }
`;

const ChatWindow = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 3rem;
  right: 0;
  width: 24rem;
  height: 30rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  box-shadow: 0 0.25rem 1rem ${(props) => props.theme.colors.shadow.card};
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  padding: ${(props) => props.theme.space.md};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.matter};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 350;
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${(props) => props.theme.space.md};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.sm};
`;

const MessageBubble = styled.div<{ $isUser: boolean }>`
  max-width: 80%;
  padding: ${(props) => props.theme.space.sm};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  align-self: ${(props) => (props.$isUser ? "flex-end" : "flex-start")};
  background: ${(props) =>
    props.$isUser
      ? props.theme.colors.primary
      : props.theme.colors.background.baby};
  color: ${(props) =>
    props.$isUser ? props.theme.colors.white : props.theme.colors.text.dark};
  font-family: ${(props) => props.theme.fonts.matter};
  font-size: ${(props) => props.theme.fontSizes.sm};
  line-height: ${(props) => props.theme.lineHeights.relaxed};
`;

const InputContainer = styled.div`
  padding: ${(props) => props.theme.space.md};
  border-top: 0.0625rem solid ${(props) => props.theme.colors.gray[300]};
  display: flex;
  gap: ${(props) => props.theme.space.sm};
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: ${(props) => props.theme.space.sm};
  border: 0.0625rem solid ${(props) => props.theme.colors.gray[300]};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  font-family: ${(props) => props.theme.fonts.matter};
  font-size: ${(props) => props.theme.fontSizes.sm};
  outline: none;

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const SendButton = styled(Button)`
  padding: ${(props) => props.theme.space.sm};
  height: 2.75rem;
  transform: translateY(0.25rem);
`;

const LoadingDots = styled.div`
  display: inline-flex;
  gap: 0.25rem;

  span {
    width: 0.5rem;
    height: 0.5rem;
    background-color: ${(props) => props.theme.colors.gray[300]};
    border-radius: 50%;
    animation: bounce 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      animation-delay: -0.16s;
    }
  }

  @keyframes bounce {
    0%,
    80%,
    100% {
      transform: scale(0);
    }
    40% {
      transform: scale(1);
    }
  }
`;

export default function ChatBot() {
  const { t } = useTranslation();
  const {
    messages,
    isOpen,
    isLoading,
    addMessage,
    setIsOpen,
    setIsLoading,
    cleanupMessages,
  } = useChatStore();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Clean up any corrupted messages on component mount
    cleanupMessages();
  }, [cleanupMessages]);

  useEffect(() => {
    // Add initial message when chat is opened for the first time
    if (isOpen && messages.length === 0) {
      addMessage({
        role: "assistant",
        content: t("chatbot.initialMessage"),
      });
    }
  }, [isOpen, messages.length, addMessage, t]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      role: "user",
      content: input.trim(),
    };

    addMessage(userMessage);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      });

      if (!response.ok) {
        // Get detailed error information
        let errorMessage = `HTTP ${response.status}: ${response.statusText}`;
        try {
          const errorData = await response.json();
          if (errorData.error) {
            errorMessage += ` - ${errorData.error}`;
          }
        } catch (e) {
          // If we can't parse the error response, use the status text
        }
        console.error("API Error Details:", {
          status: response.status,
          statusText: response.statusText,
          url: response.url,
        });
        throw new Error(errorMessage);
      }

      const data = await response.json();
      addMessage(data.message);
    } catch (error) {
      console.error("Chat error:", error);
      addMessage({
        role: "assistant",
        content: t("chatbot.error"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ChatbotContainer>
      <ChatButton
        variant="primary"
        onClick={() => setIsOpen(!isOpen)}
        showArrow={false}
      >
        {isOpen ? (
          "×"
        ) : (
          <ChatbotIcon>
            <IconWrapper $isHover={false}>
              <Image
                src="/resources/icons/chatbot.svg"
                alt="Chat with us"
                fill
                style={{ objectFit: "contain" }}
              />
            </IconWrapper>
            <IconWrapper $isHover={true}>
              <Image
                src="/resources/icons/chatbot-white.svg"
                alt="Chat with us"
                fill
                style={{ objectFit: "contain" }}
              />
            </IconWrapper>
          </ChatbotIcon>
        )}
      </ChatButton>

      <ChatWindow $isOpen={isOpen}>
        <ChatHeader>{t("chatbot.header")}</ChatHeader>

        <ChatMessages>
          {messages
            .filter((message) => message && message.role && message.content)
            .map((message, index) => (
              <MessageBubble key={index} $isUser={message.role === "user"}>
                {message.content}
              </MessageBubble>
            ))}
          {isLoading && (
            <MessageBubble $isUser={false}>
              <LoadingDots>
                <span></span>
                <span></span>
                <span></span>
              </LoadingDots>
            </MessageBubble>
          )}
          <div ref={messagesEndRef} />
        </ChatMessages>

        <InputContainer>
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder={t("chatbot.placeholder")}
            disabled={isLoading}
          />
          <SendButton
            variant="primary"
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
          >
            {t("chatbot.send")}
          </SendButton>
        </InputContainer>
      </ChatWindow>
    </ChatbotContainer>
  );
}
