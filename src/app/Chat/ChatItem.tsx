import React from 'react';

interface ChatItemProps {
  avatarSrc: string;
  name: string;
  message: string;
  isActive?: boolean;
}

const ChatItem: React.FC<ChatItemProps> = ({ avatarSrc, name, message, isActive = false }) => {
  return (
    <div className={`flex gap-4 items-center py-3 pr-1 pl-4 w-full ${isActive ? 'font-medium bg-white' : 'rounded-lg'}`}>
      <img loading="lazy" src={avatarSrc} alt={`${name}'s avatar`} className="object-contain shrink-0 self-stretch my-auto w-16 aspect-square rounded-[1000px]" />
      <div className="flex flex-col flex-1 shrink self-stretch my-auto basis-0 min-w-[240px]">
        <div className="text-xl font-medium text-black">{name}</div>
        <div className="text-base text-ellipsis text-zinc-700">{message}</div>
      </div>
    </div>
  );
};

export default ChatItem;