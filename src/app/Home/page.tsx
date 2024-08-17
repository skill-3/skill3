import React from "react";
import Header from "./Header";
import VerifiedSkillHolders from "./VerifiedSkillHolders";
import WhyUseSkill3 from "./WhyUseSkill3";
import BlockchainSection from "./BlockchainSection";
import BrandFeatures from "./BrandFeatures";
import Footer from "./Footer";

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center w-[1200px] ml-[-50px] mr-[-50px] mb-[-100px] mt-[-100px] px-20 bg-green-100 max-md:px-5">
      <div className="flex flex-col max-w-full w-[1451px]">
        <Header />
        <VerifiedSkillHolders />
        <WhyUseSkill3 />
        <BlockchainSection />
        <BrandFeatures />
        <Footer />
      </div>
    </div>
  );
};

export default MyComponent;