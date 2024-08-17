import React from 'react';

interface EventCardProps {
  imageSrc: string;
  month: string;
  day: string;
  title: string;
  dateTime: string;
  location: string;
  link?: string; // Optional link prop
}

const EventCard: React.FC<EventCardProps> = ({ imageSrc, month, day, title, dateTime, location, link = "/OpenEvent/MainContent" }) => {
  return (
    <a href={link} className="block"> {/* Wrap in an anchor tag */}
      <div className="flex overflow-hidden flex-col pb-4 mx-auto w-full text-blue-900 bg-white rounded-3xl border border-solid border-white border-opacity-20 shadow-[0px_4px_12px_rgba(0,56,140,0.1)] max-md:mt-7">
        <img loading="lazy" src={imageSrc} alt="" className="object-contain w-full aspect-[3.11]" />
        <div className="flex justify-between items-center mx-4 mt-5 max-md:mx-2.5">
          <div className="flex gap-4 self-stretch pr-9 my-auto rounded-lg min-w-[240px] w-[254px]">
            <div className="flex flex-col justify-center items-center p-2 font-semibold leading-none text-center uppercase whitespace-nowrap rounded-lg bg-blue-900 bg-opacity-20 min-h-[66px]">
              <div className="text-sm">{month}</div>
              <div className="mt-1 text-3xl">{day}</div>
            </div>
            <div className="flex flex-col self-start">
              <div className="text-base font-semibold leading-4">{title}</div>
              <div className="text-xs leading-none max-md:mr-2.5">{dateTime} · {location}</div>
            </div>
          </div>
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7771c7b963907a8bb59a40f6d490ed0d82486586a641b9a3f68dde81e498739d?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.76] w-[60px]" />
        </div>
      </div>
    </a>
  );
};

export default EventCard;
