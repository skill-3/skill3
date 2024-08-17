import React from 'react';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
  title: string;
  items: Array<{
    icon: string;
    text: string;
    isActive?: boolean;
    link?: string;
  }>;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  return (
    <section className="flex flex-col items-start px-5 mt-7 w-full text-white max-md:pr-5">
      <h2 className="text-base">{title}</h2>
      {items.map((item, index) => (
        <SidebarItem key={index} {...item} />
      ))}
    </section>
  );
};

export default SidebarSection;