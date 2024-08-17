import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="flex relative flex-col pb-12 max-w-full min-h-[2098px] pt-[1789px] w-[1440px] max-md:pt-24">
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/651c9b64c13a2f8489e3fb684a233615978fdcfe3621aa4e015b1846c533a7a1?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" alt="Footer background" className="object-cover absolute inset-0 size-full" />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/ac9d2b4095b87dd843be9c6be8ab979cef76a653e2896da6c9982a422f403098?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" alt="" className="object-contain w-full aspect-[5.52] max-md:max-w-full" />
    </footer>
  );
};

export default Footer;