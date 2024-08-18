import React from 'react';

interface NotificationSettingsProps {}

const NotificationSettings: React.FC<NotificationSettingsProps> = () => {
  return (
    <section className="relative flex flex-col items-start pl-16 mt-5 w-full max-md:pl-5 max-md:max-w-full">
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
      {/* Save changes button */}
      <button className="self-start px-10 mt-28 text-2xl text-white bg-teal-500 rounded-lg min-h-[40px] max-md:mt-10">
        Save changes
      </button>
      {/* Request for help, QR code, and view QR code */}
      
    </section>
  );
};

export default NotificationSettings;
