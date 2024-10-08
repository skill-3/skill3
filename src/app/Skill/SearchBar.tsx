import React from "react";

const SearchBar: React.FC = () => {
  return (
    <form className="flex flex-wrap gap-3.5 items-start max-w-full w-[480px]">
      <label htmlFor="skillInput" className="sr-only">
        Enter your skill
      </label>
      <div className="flex flex-auto items-start pl-4 text-xs font-bold text-black bg-zinc-300">
        <input
          id="skillInput"
          type="text"
          placeholder="Enter your skill"
          className="my-auto bg-transparent flex-grow"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/b134e21fac10a709e12dd07d4f07694299d5ca5c3b53940aa0469fc6dd2198c0?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
          alt=""
          className="object-contain shrink-0 self-start w-12 aspect-square ml-auto"
        />
      </div>
      <button
        type="submit"
        className="gap-2 self-stretch px-4 mt-2 text-2xl font-medium text-white whitespace-nowrap bg-teal-500 rounded-lg min-h-[40px]"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;