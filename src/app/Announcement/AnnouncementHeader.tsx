import React from 'react';
import SearchBar from './SearchBar';
import FilterButton from './FilterButton';
import ViewToggle from './ViewToggle';

const AnnouncementHeader: React.FC = () => {
  return (
    <header>
      <h2 className="self-start text-xl font-semibold tracking-normal text-black">Progress</h2>
      <div className="flex flex-wrap gap-5 justify-between mt-4 w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-4 text-base text-zinc-500 max-md:max-w-full">
          <SearchBar />
          <FilterButton />
        </div>
        <ViewToggle />
      </div>
    </header>
  );
};

export default AnnouncementHeader;