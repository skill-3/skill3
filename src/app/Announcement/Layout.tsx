import React from 'react';
import MainContent from './MainContent';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="pr-16 pt-10 bg-gradient-to-l from-white to-transparent max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <MainContent>{children}</MainContent>
      </div>
    </div>
  );
};

export default Layout;