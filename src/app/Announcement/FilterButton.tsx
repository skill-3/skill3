import React from 'react';

const FilterButton: React.FC = () => {
  return (
    <button className="flex gap-3 items-center py-2 pr-4 pl-3 whitespace-nowrap bg-white rounded-lg border border-solid border-neutral-200 min-h-[40px]">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3769edf7918fc94cc4b94e8e9b3ef13453f736fe745d3894845055e1edc161a?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      <span className="self-stretch my-auto text-ellipsis">Filter</span>
    </button>
  );
};

export default FilterButton;