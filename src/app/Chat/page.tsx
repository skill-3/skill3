import React from 'react';
import ChatWindow from './ChatWindow';
import ChatList from './ChatList';

const MyComponent: React.FC = () => {
  return (
    <div className="pb-10 bg-white">
      <div className="flex gap-1 max-md:flex-col">
        <div className="flex flex-col w-5/5 h-[500px] max-md:ml-0 max-md:w-full">
        </div>
        <ChatWindow />
        <ChatList />
      </div>
    </div>
  );
};

export default MyComponent;