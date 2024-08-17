import React from 'react';

interface HeaderProps {
  skillNumber: number;
}

const Header: React.FC<HeaderProps> = ({ skillNumber }) => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-center w-full max-w-[1104px] max-md:max-w-full">
      <div className="z-10 self-end px-px pt-0 pb-0.5 mt-14 text-xl font-bold uppercase rounded-none text-zinc-500 max-md:mt-10">
        skill {skillNumber}
      </div>
      <nav className="flex flex-col py-0.5 text-lg text-black max-md:max-w-full">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/40fbd3553e9309c2d960a539949bca6765b96dae12fca191c5dfa20cfa5a1809?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" alt="" className="object-contain self-end max-w-full aspect-[16.67] w-[182px]" />
        <a href="/" className="self-start mt-12 max-md:mt-10">Home</a>
      </nav>
    </header>
  );
};

export default Header;