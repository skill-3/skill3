import React from 'react';

interface ChatMessageProps {
  message: string;
  time: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, time, isUser }) => {
  const messageClass = isUser
    ? "bg-zinc-200 text-neutral-700"
    : "bg-teal-500 text-white";

  return (
    <div className={`flex relative gap-2 items-start pt-3.5 pr-3.5 pb-7 pl-4 w-full ${messageClass} rounded-xl shadow-[0px_2px_1px_rgba(0,0,0,0.05)]`}>
      <div className="flex-1 shrink gap-2 self-end text-xs">
        {message}
      </div>
      <div className="flex absolute z-0 gap-2 items-end self-start text-xs whitespace-nowrap bottom-[-15px] left-[26px] text-zinc-500 w-[17px]">
        <div className="w-[17px]">{time}</div>
      </div>
    </div>
  );
};

export default ChatMessage;