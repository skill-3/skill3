import React from 'react';

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
      <div className="px-14 pt-4 pb-2.5 mx-auto w-full bg-white mt-[991px] max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="flex flex-col w-[22%] max-md:ml-0 max-md:w-full">
            <nav className="flex overflow-hidden grow gap-2.5 items-center w-full text-white bg-white border-r border-neutral-200 max-md:mt-10">
              <div className="flex overflow-hidden flex-col self-stretch my-auto bg-white border-r border-neutral-200 min-w-[240px] w-[285px]">
                <div className="flex flex-col pt-7 pb-16 bg-slate-900 rounded-[76px]">
                  <div className="flex flex-col items-start pr-14 pl-2 w-full text-base font-semibold whitespace-nowrap max-md:pr-5">
                    <a href="/" className="flex-1 shrink gap-2.5 px-3.5 py-2.5 rounded-md border-white border-l-[5px]">
                      Home
                    </a>
                    <h2 className="z-10 -mt-6 ml-5 text-3xl tracking-tight text-zinc-100 max-md:ml-2.5">
                      Skill³
                    </h2>
                  </div>
                  {/* Navigation items */}
                  {/* ... (rest of the navigation items) */}
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;