import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/8ca4cbe673dc9326e3535a4db57592f642c1ae8b3d347ac87f2189387376c909?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
        alt="Footer decorative image"
        className="object-contain w-full aspect-[0.69]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/dfdbd16d7a6aab8196be2db35b70ec5dd0ebf2d1100bb649b176e02d6b1cd242?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
        alt="Footer content"
        className="object-contain w-full aspect-[0.72]"
      />
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b3d293a35e23b943f885f3effbe97ad0e6b1119d60c372ba020424891e5a9f21?placeholderIfAbsent=true&apiKey=c602e869c07a418cbb15b337898df55f"
        alt="Footer additional content"
        className="object-contain w-full aspect-[5.52]"
      />
    </footer>
  );
};

export default Footer;
