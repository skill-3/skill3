import React from 'react';

interface ChatSearchProps {
  placeholder: string;
  iconSrc: string;
}

const ChatSearch: React.FC<ChatSearchProps> = ({ placeholder, iconSrc }) => {
  return (
    <div className="flex gap-3 items-center self-start py-2 pr-4 pl-3 ml-6 text-base bg-white rounded-lg border border-solid border-neutral-200 min-h-[40px] text-zinc-500 max-md:ml-2.5">
      <img loading="lazy" src={iconSrc} alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <input
        type="text"
        placeholder={placeholder}
        className="flex-1 shrink self-stretch my-auto basis-0 text-ellipsis bg-transparent border-none outline-none"
        aria-label={placeholder}
      />
    </div>
  );
};

export default ChatSearch;