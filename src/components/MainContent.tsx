import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import VerifiedSkillHolders from './VerifiedSkillHolders';
import WhyUseSkill3 from './WhyUseSkill3';
import BlockchainSection from './BlockchainSection';
import BrandFeatures from './BrandFeatures';
import Footer from './Footer';

const MainContent: React.FC = () => {
  return (
    <main className="flex flex-col pb-[1463px] max-md:pb-24">
      <Header skillNumber={3} />
      <HeroSection />
      <VerifiedSkillHolders />
      <WhyUseSkill3 />
      <BlockchainSection />
      <BrandFeatures />
      <Footer />
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/83a05a0f2e13de333f45092cac4630f706b02d685726cb29b4d2f7bf1a5e4caa?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a" alt="" className="object-contain w-full aspect-[0.72] max-md:max-w-full" />
    </main>
  );
};

export default MainContent;