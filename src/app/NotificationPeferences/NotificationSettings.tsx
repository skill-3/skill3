import React from 'react';

interface NotificationSettingsProps {}

const NotificationSettings: React.FC<NotificationSettingsProps> = () => {
  return (
    <section className="flex flex-col items-start self-stretch pl-16 mt-5 w-full max-md:pl-5 max-md:max-w-full">
      <div className="flex gap-9">
        <h3 className="text-2xl font-medium text-black basis-auto">
          Notifications allow
        </h3>
        <div className="flex flex-col my-auto">
          <div className="flex flex-col justify-center p-1.5 rounded-full border-2 border-sky-500 border-solid">
            <div className="flex shrink-0 bg-sky-500 rounded-full h-[15px] w-[15px]" />
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-12 max-md:mt-10">
        <h3 className="text-2xl font-medium tracking-tight leading-none text-black basis-auto">
          Email notifications
        </h3>
        <div className="flex flex-col self-start">
          <div className="flex flex-col justify-center p-1.5 rounded-full border-2 border-sky-500 border-solid">
            <div className="flex shrink-0 bg-sky-500 rounded-full h-[15px] w-[15px]" />
          </div>
        </div>
      </div>
      <div className="flex gap-10 mt-12 max-w-full w-[338px] max-md:mt-10">
        <h3 className="flex-auto w-64 text-2xl font-medium tracking-tight leading-none text-black">
          Notifications sounds on
        </h3>
        <div className="flex flex-col self-start mt-1.5">
          <div className="flex flex-col justify-center p-1.5 rounded-full border-2 border-sky-500 border-solid">
            <div className="flex shrink-0 bg-sky-500 rounded-full h-[15px] w-[15px]" />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 justify-between self-stretch mt-64 w-full font-medium max-md:mt-10 max-md:max-w-full">
        <button className="gap-2 self-end px-4 mt-28 text-2xl text-white bg-teal-500 rounded-lg min-h-[40px] max-md:mt-10">
          Save changes
        </button>
        <div className="flex flex-col items-start text-base text-black">
          <p className="z-10 self-stretch ml-3.5 max-md:ml-2.5">
            Request for any help ?
          </p>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2ebd4fdefc6c5909ab7986dea2a042f44bb7826ad212c99188606eda88d155c8?placeholderIfAbsent=true&apiKey=0f10dcf47d4a4bb986b4f458dff7f90a"
            alt="QR Code"
            className="object-contain -mt-1.5 max-w-full aspect-square w-[132px]"
          />
          <p className="z-10 mt-0 ml-3.5 text-ellipsis max-md:ml-2.5">
            view QR code
          </p>
        </div>
      </div>
    </section>
  );
};

export default NotificationSettings;