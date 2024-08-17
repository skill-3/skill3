/**
 * This code was generated by Builder.io.
 */
import React from "react";

interface MenuItem {
  iconSrc: string;
  label: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => (
  <aside className="flex overflow-hidden flex-col grow w-full text-base font-semibold text-white bg-white border-r border-neutral-200 max-md:mt-7">
    <header className="flex overflow-hidden flex-col bg-white border-r border-neutral-200">
      <div className="flex flex-col items-start pt-7 pr-1.5 pb-24 w-full bg-slate-900 rounded-[76px]">
        <div className="z-10 -mt-6 ml-4 text-3xl tracking-tight text-zinc-100 max-md:ml-2.5">
          Skill³
        </div>

        <nav className="flex flex-col self-stretch mt-14 w-full text-xl font-medium max-md:mt-10">
          {menuItems.map((item, index) => (
            <a
              key={index}
              className="flex gap-2.5 px-3.5 py-2.5 mt-3.5 rounded-md border-white border-l-[5px]"
              href="#"
            >
              <img
                loading="lazy"
                src={item.iconSrc}
                alt=""
                className="object-contain shrink-0 my-auto w-5 aspect-square"
              />
              <span className="flex-1 shrink basis-0">{item.label}</span>
            </a>
          ))}
        </nav>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/65202168aab88bd2cf4b3af333e951f187227c9112e2247883e1fce288a30599?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
          alt=""
          className="object-contain mt-5 w-full max-md:mr-1.5"
        />
      </div>
    </header>

    <footer className="flex flex-col items-start pr-9 pl-2.5 mt-1.5 w-full text-base max-md:pr-5">
      <div className="ml-3 text-base max-md:ml-2.5">SETTINGS</div>
      <a
        href="#"
        className="flex overflow-hidden gap-2.5 px-3.5 py-2.5 mt-2 rounded-md min-h-[39px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cc3d06843728db0f3367d3318c4c6b497b86cad43bd9aa80951e2e72a07e87af?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
          alt=""
          className="object-contain shrink-0 my-auto w-5 aspect-square"
        />
        <span className="flex-1 shrink basis-0"> Account settings </span>
      </a>
      <a
        href="#"
        className="flex overflow-hidden gap-2.5 py-2.5 pl-3.5 mt-2.5 min-h-[40px]"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ef320a2e7b16f6b98e71f92da8ac8a0996f3188def692317a7625c9fb3f52128?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
          alt=""
          className="object-contain shrink-0 my-auto w-5 aspect-square"
        />
        <span className="w-[184px]">Notification preferences</span>
      </a>
    </footer>
  </aside>
);

export default Sidebar;
