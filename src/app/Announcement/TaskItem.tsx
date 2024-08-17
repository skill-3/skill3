/**
 * This code was generated by Builder.io.
 */
import React from 'react';

interface TaskItemProps {
  id: string;
  title: string;
  progress: number;
  priority: string;
  date: string;
  owner: string;
}

const TaskItem: React.FC<TaskItemProps> = ({ id, title, progress, priority, date, owner }) => {
  const priorityColor = {
    High: 'bg-teal-500',
    Medium: 'bg-cyan-400',
    Low: 'bg-cyan-400',
  };

  return (
    <div className="flex flex-wrap gap-5 justify-between mt-6 w-full max-md:mr-2.5 max-md:max-w-full">
      <div className="flex gap-8">
        <div className="flex flex-col whitespace-nowrap text-zinc-500">
          <div className="self-start">{id}</div>
        </div>
        <div className="flex flex-col text-black">
          <div className="self-start">{title}</div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col">
          <div className="self-center text-base font-medium text-black">Progress</div>
          <div className="flex gap-5 mt-7 w-full">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`flex flex-1 gap-2 justify-center items-center px-2 py-2.5 ${
                  index < progress ? 'bg-teal-500' : 'bg-white'
                } rounded-lg border border-solid border-neutral-200 min-h-[32px]`}
              >
                <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6d16652616987abef303ffb8eb24cd6b71a86535592de6b37441b67d5a3d9f8e?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" alt="" className="object-contain self-stretch my-auto aspect-square w-[15px]" />
              </div>
            ))}
          ))}
          </div>
        </div>
        <div className="flex flex-col grow shrink-0 basis-0 w-fit">
          <div className="flex gap-10 self-end mr-11 text-base font-medium text-black whitespace-nowrap max-md:mr-2.5">
            <div>Priority</div>
            <div className="text-right">Date</div>
            <div className="text-center">Owner</div>
          </div>
          <div className="flex gap-6 mt-7 w-full">
            <div className="flex flex-1 gap-5">
              <div className={`gap-2 self-stretch px-2 py-1.5 my-auto text-xs font-semibold leading-none text-white whitespace-nowrap ${priorityColor[priority]} rounded-lg border border-solid border-neutral-200`}>
                {priority}
              </div>
            </div>
            <div className="flex flex-1 gap-3 self-start text-base text-right text-zinc-500">
              <div className="grow">{date}</div>
              <img loading="lazy" src={owner} alt="Task owner" className="object-contain shrink-0 self-start max-w-full aspect-[3.75] w-[105px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;