import React from "react";

const ImageSection: React.FC = () => {
  return (
    <section className="relative w-full h-full">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/cf91b483c467623b8335827ae67dce074e6635b5e564826069cf97104232f57c?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
        alt="Descriptive content image"
        className="absolute top-0 right-0 object-contain mt-2.5 w-6/12 aspect-[0.91] max-md:mt-9"
      />
    </section>
  );
};

export default ImageSection;
