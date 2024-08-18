import React from 'react';

interface TokenCardProps {
  amount: string;
  percentage: string;
  label: string;
}

const TokenCard: React.FC<TokenCardProps> = ({ amount, percentage, label }) => {
  return (
    <div className="flex flex-col grow pt-4 max-md:mt-10">
      <div className="flex z-10 flex-col items-start p-4 mt-0 w-full rounded-2xl shadow-sm bg-[linear-gradient(134deg,#4E4E4E_-16.04%,#333_9.33%,#1A1A1A_32.02%,#1A1A1A_62.06%,#262626_87.42%,#4E4E4E_112.12%)]">
        <div className="flex gap-3 justify-center items-center">
          <div className="relative flex items-center self-rounded justify-center h-[38px] w-[38px] bg-emerald-300 rounded-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/0ed59e5520013f3f10568556187c584a0eb058a24fb01624e13bc0c1ee815fb1?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="" className="absolute inset-0 w-full h-full object-cover rounded-full" />
          </div>
          <div className="flex gap-1.5 justify-center items-center self-stretch my-auto">
            <div className="self-stretch my-auto text-xs font-medium leading-snug text-emerald-400">
              {percentage}
            </div>
            <div className="flex gap-2.5 items-center self-stretch p-0.5 my-auto rounded-3xl bg-green-300 bg-opacity-20 h-[18px] w-[18px]">
              <div className="flex w-6 min-h-[24px]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-2">
          <div className="text-3xl font-semibold leading-snug text-white">{amount}</div>
          <div className="mt-2 text-sm font-medium leading-tight text-indigo-400">{label}</div>
        </div>
      </div>
    </div>
  );
};

export default TokenCard;
