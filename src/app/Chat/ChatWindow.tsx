import React from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';

const ChatWindow: React.FC = () => {
  return (
    <div className="flex flex-col ml-5 w-3/5 max-md:ml-0 max-md:w-full">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="self-end w-full max-w-[900px] max-md:max-w-full">
          <div className="flex flex-col gap-5 max-md:flex-col">
            <div className="flex flex-col w-[37%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-32 w-full max-md:mt-10">
                <div className="self-end text-3xl mt-[-10px] leading-none text-black">
                  Dr. Smith
                </div>
                <ChatMessage
                  message="Proof of Work (PoW) and Proof of Stake (PoS) differ significantly in energy efficiency and network security. PoW requires miners to solve complex puzzles, consuming substantial energy and raising environmental concerns. In contrast, PoS is more energy-efficient, relying on validators who are selected based on the amount of cryptocurrency they stake, reducing energy usage."
                  time="7:20"
                  isUser={false}
                />
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[63%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
              
                <div className="flex z-10 flex-wrap items-center mt-12 w-full max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                  <ChatMessage
                    message="Good morning dr smith You mentioned that it lacks critical analysis and that some sources are outdated. Could you elaborate on what specific changes you would like to see?"
                    time="7:20"
                    isUser={true}
                  />
                </div>
                <ChatInput />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;