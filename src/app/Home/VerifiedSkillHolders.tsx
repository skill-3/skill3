import React from "react";

interface SkillHolderProps {
  imageSrc: string;
  altText: string;
  text?: string;
}

const SkillHolder: React.FC<SkillHolderProps> = ({ imageSrc, altText, text }) => (
  <div className="flex flex-col text-6xl font-bold tracking-tighter leading-none text-center text-black whitespace-nowrap min-w-[240px] w-[284px] max-md:text-4xl">
    <img loading="lazy" src={imageSrc} alt={altText} className="object-contain w-full aspect-[1.47]" />
    {text && <div className="self-start mt-5 ml-5 max-md:ml-2.5 max-md:text-4xl">{text}</div>}
  </div>
);

const VerifiedSkillHolders: React.FC = () => {
  const skillHolders = [
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/f971d201574083ac9bc61c0482db8dd18f7a61f991e985a3ecb6dc9b53c12fbb?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f", altText: "Verified skill holder 1", text: "Verified" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/e763190850bfa6855ad9163805a3fe9ba452b96cf9306a94f7de416f554c46f6?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f", altText: "Verified skill holder 2" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/cf2f72c74bb0fb6bdfcd7c0338ebd7a3a9ea3e509decab846a6022f2c28ed901?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f", altText: "Verified skill holder 3" },
    { imageSrc: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f60716068b181827674610d1892132f202dd73937c5dc7f3a12073607a4f77e?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f", altText: "Verified skill holder 4" },
  ];

  return (
    <section className="flex overflow-hidden flex-col py-32 w-full bg-white max-w-[1440px] max-md:pt-24 max-md:max-w-full">
      <h2 className="self-center text-6xl font-bold tracking-tighter leading-none text-center text-zinc-800 max-md:max-w-full max-md:text-4xl">
        Join 10,000+ verified skill holders
      </h2>
      <div className="flex items-start mt-24 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-wrap gap-10 items-start pr-16 pl-16 min-w-[240px] max-md:px-5 max-md:max-w-full">
          {skillHolders.map((holder, index) => (
            <SkillHolder key={index} {...holder} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VerifiedSkillHolders;