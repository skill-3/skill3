import React from 'react';

const ViewToggle: React.FC = () => {
  return (
    <div className="flex items-start p-1 rounded-lg bg-neutral-100">
      <button className="flex gap-2 items-center px-3 w-12 bg-white rounded shadow-sm min-h-[32px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f88980b68a3be11ada347d30c96634d6e536d9ce892de4c750dfac97dd31992d?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="Grid view" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </button>
      <button className="flex gap-2 items-center px-3 w-12 rounded min-h-[32px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af32cd91bd07ec2fa54bb1a3f6d486af27ed2819b9fe91cc488a0859c1aba768?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="List view" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </button>
      <button className="flex gap-2 items-center px-3 w-12 rounded min-h-[32px]">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d48c0dbb27a82e28b4fcc98cf0ab708676b8478e6bd87b8965777a250a40c33c?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f" alt="Calendar view" className="object-contain self-stretch my-auto w-6 aspect-square" />
      </button>
    </div>
  );
};

export default ViewToggle;