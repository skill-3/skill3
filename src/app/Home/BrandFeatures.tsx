import React from "react";

interface FeatureProps {
  imageSrc: string;
  altText: string;
  title: string;
  description?: string;
  backgroundColor: string;
}

const Feature: React.FC<FeatureProps> = ({ imageSrc, altText, title, description, backgroundColor }) => (
  <div className={`flex flex-col grow px-10 pt- 0 pb-28 w-full text-3xl font-bold leading-9 text-center ${backgroundColor} rounded-xl text-zinc-800 max-md:px-5 max-md:pb-24 max-md:mt-8`}>
    <img loading="lazy" src={imageSrc} alt={altText} className="object-contain w-full aspect-[1.58]" />
    <div className="mt-16 ml-5 max-md:mt-10">{title}</div>
    {description && (
      <div className="mt-2 text-base font-medium leading-8 text-zinc-600 max-md:mr-0.5">{description}</div>
    )}
  </div>
);

const BrandFeatures: React.FC = () => {
  const features = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/6757eab1b0b8e7464c314efbe4abaa74c212067b85ad2d3bd88d77d522c612ec?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f",
      altText: "Ignite your potential illustration",
      title: "Ignite your potential",
      backgroundColor: "bg-orange-50",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/0b257ac80b430728ac668f1857c017a9297492858ebd0bdf380b58a74069106e?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f",
      altText: "Seamless integration illustration",
      title: "Seamless integration across platforms",
      backgroundColor: "bg-green-100",
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/723c9791785f70710aea0340737d520b2e6c9ef330b6a6566d8f3d0f302e61b0?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f",
      altText: "Real-time ROI dashboard illustration",
      title: "Real-time ROI dashboard",
      description: "Track performance of every postcard by customer or discount code. Your CFO will love it.",
      backgroundColor: "bg-violet-100",
    },
  ];

  return (
    <section className="flex items-start px-20 w-full bg-white max-md:px-5">
      <div className="flex flex-col min-w-[240px] pb-[100px] w-[1290px] max-md:pb-24 max-md:max-w-full">
      <h2 className="z-10 pt-20 pr-80 pl-80 self-center text-7xl tracking-tighter leading-none text-center text-teal-600 whitespace-nowrap max-md:px-5 max-md:pt-24 max-md:max-w-full max-md:text-4xl">
        make your brand unforgettable
      </h2>

        <h3 className="self-center mt-0 text-6xl font-bold tracking-tighter leading-none text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
          Everything your brand needs to
        </h3>
        <div className="mt-40 max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <Feature {...feature} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandFeatures;