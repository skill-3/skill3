/**
 * This code was generated by Builder.io.
 */
import React from "react";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";

const MyComponent: React.FC = () => {
  const menuItems = [
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8c5c232620efa12614b00360cb6c51636dc8a2ee8ccbd9ede41923b6c3c722c6?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Home",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8c5c232620efa12614b00360cb6c51636dc8a2ee8ccbd9ede41923b6c3c722c6?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Dashboard",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b8efb202ee87edc3323e56959f0f16a34a24af688ccddea2d39b04d3b94c0dca?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "New Skill",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/b2ce1294b5b240f52b6b43b7ebf20661fb5241b79eeeba12a36eb11df0c37d7a?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Expert",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ed4bacc144346ab2e7147932a690d8185d0ae827ea6f742201694d6a2ca7f461?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Progress",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/70e8cc7398b6ef415ac761854960b09159a8c4af56532caabba5c19339c2a6d2?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Chat",
    },
    {
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/eed4648a734703a610f65e0537b5c71f41f30a8c4ca85f1c959e49f2b441049d?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a",
      label: "Announcements",
    },
  ];

  return (
    <div className="pr-3 pb-11 bg-white">
      <section className="flex gap-5 max-md:flex-col">
        <Sidebar menuItems={menuItems} />
        <MainContent />
      </section>
    </div>
  );
};

export default MyComponent;
