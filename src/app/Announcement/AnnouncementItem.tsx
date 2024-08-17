import React from 'react';

interface AnnouncementItemProps {
  id: string;
  title: string;
  progress: number;
  priority: string;
  date: string;
  owner: string;
}

const AnnouncementItem: React.FC<AnnouncementItemProps> = ({ id, title, progress, priority, date, owner }) => {

  const priorityColor = {
    High: 'bg-teal-500',
    Medium: 'bg-cyan-400',
    Low: 'bg-cyan-400',
  }[priority] || 'bg-gray-300'; // Provide a default color if priority is not found

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-4 w-full max-md:max-w-full">
      <div className="flex gap-8">
        <div className="flex flex-col whitespace-nowrap text-zinc-500">
          <div className="self-start">{id}</div>
        </div>
        <div className="flex flex-col text-black">
          <div className="self-start">{title}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-10">
        <div className="flex items-center gap-5 mr-[-20px]">
          <div className="flex gap-3">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`flex justify-center items-center px-2 py-2.5 rounded-lg border border-solid border-neutral-500 bg-white min-h-[32px] w-[32px]`}
              >
                {index < progress && (
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d16652616987abef303ffb8eb24cd6b71a86535592de6b37441b67d5a3d9f8e?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="" className="object-contain aspect-square w-full h-full" />
                )}
              </div>
            ))}
          </div>
          <div className={`flex items-center gap-2 px-2 py-1.5 text-xs font-semibold leading-none text-white whitespace-nowrap ${priorityColor} rounded-lg border border-solid border-neutral-200`}>
            {priority}
          </div>
        </div>
        <div className="flex gap-3 self-start text-base text-right text-zinc-500">
          <div className="grow">{date}</div>
          <img loading="lazy" src={owner} alt="Owner avatar" className="object-contain shrink-0 self-start max-w-full aspect-[3.75] w-[105px]" />
        </div>
      </div>
    </div>
    
  );
};

export default AnnouncementItem;
