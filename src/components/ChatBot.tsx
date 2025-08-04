"use client";

import { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Button from "./ui/Button";
import { useChatStore, Message } from "../lib/store/chatStore";
import { useTranslation } from "react-i18next";
import i18n from "../lib/i18n/config";
import Image from "next/image";
import { handleChatMessage } from "@/app/actions/chat";

const ChatbotContainer = styled.div`
  position: fixed;
  bottom: ${(props) => props.theme.space.lg};
  right: ${(props) => props.theme.space.lg};
  z-index: 1000;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    bottom: ${(props) => props.theme.space.md};
    right: ${(props) => props.theme.space.md};
    left: ${(props) => props.theme.space.md};
  }
`;

const ChatbotIcon = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ChatButton = styled.button<{ $isOpen: boolean }>`
  width: auto;
  min-width: ${(props) => (props.$isOpen ? "3rem" : "4rem")};
  height: ${(props) => (props.$isOpen ? "3rem" : "3.5rem")};
  border-radius: ${(props) => (props.$isOpen ? "1.5rem" : "2rem")};
  padding: ${(props) => (props.$isOpen ? "0 0.75rem" : "0 1rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0.25rem 1rem ${(props) => props.theme.colors.shadow.card};
  font-size: ${(props) => (props.$isOpen ? "1.5rem" : "3.5rem")};
  font-weight: 300;
  position: relative;
  overflow: hidden;
  transition: width 0.3s ease, height 0.3s ease, border-radius 0.3s ease,
    padding 0.3s ease, min-width 0.3s ease;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    min-width: ${(props) => (props.$isOpen ? "2.5rem" : "3.5rem")};
    height: ${(props) => (props.$isOpen ? "2.5rem" : "3rem")};
    border-radius: ${(props) => (props.$isOpen ? "1.25rem" : "1.5rem")};
    padding: ${(props) => (props.$isOpen ? "0 0.5rem" : "0 0.75rem")};
    font-size: ${(props) => (props.$isOpen ? "1.25rem" : "3rem")};
    position: fixed;
    bottom: ${(props) => props.theme.space.md};
    right: ${(props) => props.theme.space.md};
    z-index: 1001;
  }

  &:hover {
    padding-right: ${(props) => (props.$isOpen ? "0.75rem" : "3.5rem")};
    background-color: ${(props) => props.theme.colors.primary};

    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      padding-right: ${(props) => (props.$isOpen ? "0.5rem" : "3rem")};
    }

    .hi-text {
      opacity: ${(props) => (props.$isOpen ? "0" : "1")};
      transform: translateX(${(props) => (props.$isOpen ? "0" : "0")});
    }
  }
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

const HiText = styled.span`
  position: absolute;
  right: 1rem;
  opacity: 0;
  transform: translateX(-0.5rem);
  transition: all 0.3s ease;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  font-family: ${(props) => props.theme.fonts.matter};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    right: 0.75rem;
    font-size: 0.75rem;
  }
`;

const CloseIcon = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  transition: font-size 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    font-size: 1.25rem;
  }
`;

const ChatWindow = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 4rem;
  right: 0;
  width: 28rem;
  height: 32rem;
  background: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  box-shadow: 0 0.25rem 1rem ${(props) => props.theme.colors.shadow.card};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  transform: ${(props) => (props.$isOpen ? "scale(1)" : "scale(0.8)")};
  transform-origin: bottom right;
  transition: opacity 0.2s ease, transform 0.2s ease;
  pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    position: fixed;
    top: 10%;
    left: ${(props) => props.theme.space.md};
    right: ${(props) => props.theme.space.md};
    bottom: 10%;
    width: auto;
    height: auto;
    border-radius: ${(props) => props.theme.borderRadius.sm};
    transform: ${(props) => (props.$isOpen ? "scale(1)" : "scale(0.9)")};
    transform-origin: center;
  }

  @media (max-width: ${(props) =>
      props.theme.breakpoints.tablet}) and (min-width: ${(props) =>
      props.theme.breakpoints.mobile}) {
    width: 24rem;
    height: 28rem;
    bottom: 3.5rem;
  }
`;

const ChatHeader = styled.div`
  padding: ${(props) => props.theme.space.md};
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  font-family: ${(props) => props.theme.fonts.matter};
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: 350;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.space.sm};
    font-size: ${(props) => props.theme.fontSizes.sm};
  }
`;

const ChatMessages = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: ${(props) => props.theme.space.md};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.theme.space.sm};
  -webkit-overflow-scrolling: touch;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.space.sm};
    gap: ${(props) => props.theme.space.xs};
    padding-bottom: ${(props) => props.theme.space.md};
  }
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
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-wrap: break-word;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    max-width: 85%;
    padding: ${(props) => props.theme.space.xs};
    font-size: ${(props) => props.theme.fontSizes.xs};
    line-height: 1.4;
  }
`;

const InputContainer = styled.div`
  padding: ${(props) => props.theme.space.md};
  border-top: 0.0625rem solid ${(props) => props.theme.colors.gray[300]};
  display: flex;
  gap: ${(props) => props.theme.space.sm};
  align-items: center;
  background: ${(props) => props.theme.colors.white};

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.space.sm};
    gap: ${(props) => props.theme.space.xs};
    position: sticky;
    bottom: 0;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: ${(props) => props.theme.space.sm};
  border: 0.0625rem solid ${(props) => props.theme.colors.gray[300]};
  border-radius: ${(props) => props.theme.borderRadius.sm};
  font-family: ${(props) => props.theme.fonts.matter};
  font-size: ${(props) => props.theme.fontSizes.sm};
  outline: none;
  min-height: 2.75rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.space.xs};
    font-size: 0.75rem;
    min-height: 2.25rem;
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.primary};
  }

  &::placeholder {
    @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
      font-size: 0.75rem;
    }
  }
`;

const SendButton = styled(Button)`
  padding: ${(props) => props.theme.space.sm};
  height: 2.75rem;
  min-width: 4rem;
  white-space: nowrap;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    padding: ${(props) => props.theme.space.xs};
    height: 2.25rem;
    min-width: 3rem;
    font-size: 0.75rem;
  }
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
  const { t, i18n } = useTranslation();
  const {
    messages,
    isOpen,
    isLoading,
    addMessage,
    setIsOpen,
    setIsLoading,
    cleanupMessages,
    clearMessages,
  } = useChatStore();
  const [input, setInput] = useState("");
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);
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

  // Detect language changes and update initial message
  useEffect(() => {
    if (i18n.language !== currentLanguage) {
      setCurrentLanguage(i18n.language);
      // Clear messages and add new initial message in the new language
      clearMessages();
      if (isOpen) {
        addMessage({
          role: "assistant",
          content: t("chatbot.initialMessage"),
        });
      }
    }
  }, [i18n.language, currentLanguage, isOpen, addMessage, t, clearMessages]);

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
      const response = await handleChatMessage(
        [...messages, userMessage],
        i18n.language
      );
      addMessage(response.message);
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
      <ChatButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <CloseIcon>×</CloseIcon>
        ) : (
          <>
            <ChatbotIcon>
              <Image
                src="/resources/icons/chatbot-white.svg"
                alt="Chat with us"
                fill
                style={{ objectFit: "contain" }}
              />
            </ChatbotIcon>
            <HiText className="hi-text">
              {i18n.language === "is" ? "Hæ !" : "Hi !"}
            </HiText>
          </>
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
