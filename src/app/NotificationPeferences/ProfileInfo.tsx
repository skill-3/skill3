import React from 'react';

interface ProfileInfoProps {}

const ProfileInfo: React.FC<ProfileInfoProps> = () => {
  return (
    <div className="mt-8 max-w-full w-[590px]">
      <div className="flex gap-5 max-md:flex-col">
        <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
          <div className="flex overflow-hidden flex-col grow px-6 pt-5 rounded-[100px] max-md:px-5 max-md:mt-4">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c31ed0b15e2c4ef1b54355484f44751bb3421f5308b92a79d93d60a5e74aae4?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
              alt="Profile"
              className="object-contain aspect-[0.9] w-[153px]"
            />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[64%] max-md:ml-0 max-md:w-full">
          <div className="flex gap-6 items-center text-3xl font-medium text-black whitespace-nowrap min-h-[152px] max-md:mt-5">
            <div className="self-stretch my-auto">Merna</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;