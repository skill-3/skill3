/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface ChatMessageProps {
  sender: string;
  content: string;
  timestamp: string;
}

const ChatMessage: React.FC<ChatMessageProps> = ({
  sender,
  content,
  timestamp,
}) => {
  const isUser = sender === "user";
  return (
    <div className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}>
      <div
        className={`flex relative gap-2 items-start pt-3.5 pr-3.5 pb-7 pl-4 w-full ${
          isUser ? "bg-zinc-200" : "bg-teal-500"
        } rounded-xl shadow-[0px_2px_1px_rgba(0,0,0,0.05)]`}
      >
        <p
          className={`flex-1 shrink gap-2 self-end text-xs ${
            isUser ? "text-neutral-700" : "text-white"
          }`}
        >
          {content}
        </p>
        <time className="flex absolute z-0 gap-2 items-end self-start text-xs whitespace-nowrap bottom-[-15px] left-[26px] text-zinc-500 w-[17px]">
          {timestamp}
        </time>
      </div>
    </div>
  );
};

export default ChatMessage;
