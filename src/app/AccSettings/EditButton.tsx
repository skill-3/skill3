import React from 'react';

const EditButton: React.FC = () => {
  return (
    <section className="flex flex-col ml-5 w-[32%] max-md:ml-0 max-md:w-full">
      <button className="px-16 pt-10 pb-20 w-full text-4xl font-bold text-black whitespace-nowrap bg-green-100 mt-[776px] rounded-[50px] max-md:px-5 max-md:mt-10">
        EDIT
      </button>
    </section>
  );
};

export default EditButton;