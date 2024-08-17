import React from 'react';
import ChatSearch from './ChatSearch';
import ChatItem from './ChatItem';

interface ChatData {
  avatarSrc: string;
  name: string;
  message: string;
}

const chatData: ChatData[] = [
  {
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/59f205f2caee7a3167c443fd56617577ec801cc9be1ca8b647414151060d7f1b?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f",
    name: "Merna",
    message: "Will head to the Help Center..."
  },
  {
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/bc427208475800f6c8e715820c0e0c9ef6d49d333ddceeeaca98fbb2505bd9fe?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f",
    name: "Carlo Emilio",
    message: "Let's go"
  },
  {
    avatarSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0ad37caab6cb29ac796ffd536fc2be7ef65317d00afeeabf0fb923ae622d3153?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f",
    name: "Oscar Davis",
    message: "Trueeeeee"
  }
];

const ChatList: React.FC = () => {
  return (
    <aside className="flex overflow-hidden flex-col pt-16 max-w-full bg-white border-r border-neutral-200 w-[387px] -ml-10 mt-10"> {/* Adjust these values */}
      <ChatSearch placeholder="Search chats" iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/7d180ede1e5a24e1790ffc4498c2d09888ca77d75df2507d9db1d38978cc0fcb?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" />
      <nav className="flex flex-col mt-6 w-full">
        {chatData.map((chat, index) => (
          <ChatItem
            key={index}
            avatarSrc={chat.avatarSrc}
            name={chat.name}
            message={chat.message}
            isActive={index === 0}
          />
        ))}
      </nav>
    </aside>
  );
};

export default ChatList;
