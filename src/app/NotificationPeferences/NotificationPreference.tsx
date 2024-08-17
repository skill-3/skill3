import React from 'react';
import Header from '../Header';
import Sidebar from '../Sidebar';
import NotificationSettings from './NotificationSettings';
import ProfileInfo from './ProfileInfo';

interface NotificationPreferencesProps {}

const NotificationPreferences: React.FC<NotificationPreferencesProps> = () => {
  return (
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
        <Header />
        <main className="flex items-start px-20 w-full bg-white max-md:px-5">
          <div className="flex flex-col min-w-[240px] pb-[648px] w-[1290px] max-md:pb-24 max-md:max-w-full">
            <h1 className="ml-16 text-3xl font-semibold tracking-tight leading-none text-black max-md:ml-2.5">
              Notification Preferences
            </h1>
            <ProfileInfo />
            <NotificationSettings />
          </div>
        </main>
      </div>
      <Sidebar />
    </div>
  );
};

export default NotificationPreferences;