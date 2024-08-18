import React from 'react';
import NotificationSettings from './NotificationSettings';
import ProfileInfo from './ProfileInfo';
import SparkleIcon from '../component/SparkleIcon';

interface NotificationPreferencesProps {}

const NotificationPreferences: React.FC<NotificationPreferencesProps> = () => {
  return (
    <div className="relative flex gap-5 max-md:flex-col"> {/* Added relative positioning */}
      <div className="absolute top-4 right-4 flex flex-col mr-20 space-y-2 p-4 bg-cyan-400/50 w-full max-w-xs rounded-lg text-cyan-700 z-10">
        <SparkleIcon className="h-8 w-8" />
        <p className="text-lg font-light">
          You can always reach to me for futher assistant
        </p>
      </div>
      <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
        <main className="flex items-start px-20 w-full max-md:px-5">
          <div className="flex flex-col min-w-[240px] pb-[648px] w-[1290px] max-md:pb-24 max-md:max-w-full">
            <h1 className="ml-16 text-3xl font-semibold tracking-tight leading-none text-black max-md:ml-2.5">
              Notification Preferences
            </h1>
            <ProfileInfo />
            <NotificationSettings />
          </div>
        </main>
      </div>
    </div>
  );
};

export default NotificationPreferences;
