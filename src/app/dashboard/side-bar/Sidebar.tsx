"use client"

import React from 'react';
import { Link } from 'react-router-dom';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';
import { homeItems, academicItems, settingsItems, logoutItems } from './sidebarData';

const Sidebar: React.FC = () => {
  return (
    <nav className="flex flex-col items-start pt-1 pb-24 w-64 bg-slate-900 overflow-y-auto max-h-screen">
      <header className="flex gap-2 px-3 py-2 text-base text-white whitespace-nowrap rounded-md border-white" />
      <h1 className="text-2xl tracking-tight text-zinc-100 ml-4 mt-4">
        Skill³
      </h1>
      <div className="flex flex-col w-full text-lg font-medium">
        <SidebarSection title="HOME" items={homeItems} />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65202168aab88bd2cf4b3af333e951f187227c9112e2247883e1fce288a30599?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
          alt=""
          className="object-contain mt-4 w-3/4"
        />
        <SidebarSection title="ACADEMIC" items={academicItems} />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/8079025b46cd1b9dfeb24fbd326b42c400a6d7451fde99f64b29efbe285fe46e?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
          alt=""
          className="object-contain mt-2 w-3/4 aspect-[200]"
        />
        <SidebarSection title="SETTINGS" items={settingsItems} />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/806a62aeab22292b8114173ff0bb3945f7808ce63a80aedcc06ae9b5dc5a97c2?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
          alt=""
          className="object-contain self-start mb-4 ml-30 w-3/4 aspect-[200]"
        />
        <SidebarSection title="" items={logoutItems} />
      </div>
    </nav>
  );
};

export default Sidebar;
