import React from 'react';

interface SidebarItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  link?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, isActive = false, link }) => {
  const baseClasses = "flex overflow-hidden gap-2.5 px-3.5 py-2.5 mt-2.5 rounded-md min-h-[39px] text-white";
  const activeClasses = isActive ? "text-teal-500" : "hover:text-blue-500"; // Add hover effect here

  const content = (
    <>
      <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 my-auto w-5 aspect-square" />
      <div className="flex-1 shrink basis-0">{text}</div>
    </>
  );

  if (link) {
    return (
      <a href={link} className={`${baseClasses} ${activeClasses}`}>
        {content}
      </a>
    );
  }

  return (
    <div className={`${baseClasses} ${activeClasses}`}>
      {content}
    </div>
  );
};

export default SidebarItem;
