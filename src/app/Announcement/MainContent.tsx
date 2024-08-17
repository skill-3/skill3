import React from 'react';
import AnnouncementHeader from './AnnouncementHeader';
import AnnouncementList from './AnnouncementList';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return (
    <main className="flex flex-col ml-5 max-w-full w-[100%] max-md:ml-0 max-md:w-full">
      <div className="flex flex-col self-stretch my-auto w-full max-md:mt-10 max-md:max-w-full">
        <AnnouncementHeader />
        <AnnouncementList />
        {children}
      </div>
    </main>
  );
};

export default MainContent;