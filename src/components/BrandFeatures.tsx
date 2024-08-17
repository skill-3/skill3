import React from 'react';

interface FeatureProps {
  imageSrc: string;
  title: string;
  description?: string;
  backgroundColor: string;
}

const Feature: React.FC<FeatureProps> = ({ imageSrc, title, description, backgroundColor }) => (
  <div className={`flex flex-col grow px-10 pt-10 pb-28 w-full text-3xl font-bold leading-9 text-center ${backgroundColor} rounded-xl text-zinc-800 max-md:px-5 max-md:pb-24 max-md:mt-8`}>
    <img loading="lazy" src={imageSrc} alt="" className="object-contain w-full aspect-[1.58]" />
    <div className="mt-16 ml-5 max-md:mt-10">{title}</div>
    {description && (
      <div className="mt-2 text-base font-medium leading-8 text-zinc-600 max-md:mr-0.5">
        {description}
      </div>
    )}
  </div>
);

const BrandFeatures: React.FC = () => {
  const features = [
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/3469bfa68900a14bdb19e1034fa4bbbfb28e2cebe6f3f6816135317872ac446f?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      title: "Ignite your potential",
      backgroundColor: "bg-orange-50"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/1ebbbe23f095e845a8a2ef47e0845b788ba268efc9661c6218f5beb92b87b0ac?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      title: "Seamless integration across platforms",
      backgroundColor: "bg-green-100"
    },
    {
      imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/34d20835f47b06af6f58101d58642261a55da38255402a3c64f4fcf8e727560e?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      title: "Real-time ROI dashboard",
      description: "Track performance of every postcard by customer or discount code. Your CFO will love it.",
      backgroundColor: "bg-violet-100"
    }
  ];

  return (
    <section className="flex items-start px-20 max-w-full bg-white w-[1440px] max-md:px-5">
      <div className="flex flex-col min-w-[240px] pb-[648px] w-[1290px] max-md:pb-24 max-md:max-w-full">
        <h2 className="z-10 pt-52 pr-80 pl-80 text-7xl tracking-tighter leading-none text-center text-teal-600 max-md:px-5 max-md:pt-24 max-md:max-w-full max-md:text-4xl">
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