import React from "react";

const BlockchainSection: React.FC = () => {
  return (
    <section className="flex items-start px-20 w-full text-7xl font-bold tracking-tighter text-center bg-orange-50 leading-[76px] text-zinc-800 max-md:px-5 max-md:text-4xl max-md:leading-10">
      <div className="px-16 pt-20 min-w-[240px] pb-[150px] w-[1290px] max-md:px-5 max-md:pb-24 max-md:max-w-full max-md:text-4xl max-md:leading-10">
        Blockchain simplifies the process of sending token while ensuring enhanced security.
      </div>
    </section>
  );
};

export default BlockchainSection;