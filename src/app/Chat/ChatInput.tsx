import React from 'react';

const ChatInput: React.FC = () => {
  return (
    <div className="flex flex-col p-3.5 mt-10 max-w-full bg-white rounded-none shadow-[0px_-3px_13px_rgba(0,0,0,0.08)] text-neutral-700 w-[782px] max-md:mt-10">
      <div className="flex flex-wrap gap-2 items-start w-full text-xs font-semibold max-md:max-w-full">
        <div className="flex-1 shrink gap-2 self-stretch px-3.5 py-1.5 bg-gray-100 rounded-lg min-w-[240px] shadow-[0px_1px_0px_rgba(0,0,0,0.12)] max-md:max-w-full">
          🤔 i had update the latest version of paper how is your opinion ?
        </div>
        <div className="gap-2 self-stretch px-3.5 py-1.5 bg-gray-100 rounded-lg min-w-[240px] shadow-[0px_1px_0px_rgba(0,0,0,0.12)]">
          alright,I will. Thanks again for your guidance.
        </div>
        <div className="gap-2 self-stretch px-3.5 py-1.5 bg-gray-100 rounded-lg shadow-[0px_1px_0px_rgba(0,0,0,0.12)]">
          🙋‍♂️ FAQs
        </div>
      </div>
      <input
        type="text"
        placeholder="Type your message here..."
        className="overflow-hidden gap-10 px-5 py-4 mt-1.5 w-full text-base rounded-xl border-t border-gray-100 bg-slate-200 max-md:max-w-full"
        aria-label="Type your message"
      />
    </div>
  );
};

export default ChatInput;