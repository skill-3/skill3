"use client"

import React from 'react';
import ProfileInfo from './ProfileInfo';
import EditButton from './EditButton';

const MyComponent: React.FC = () => {
  return (
    <main className="pr-20 bg-white max-md:pr-5">
      <div className="flex gap-5 max-md:flex-col">
        <ProfileInfo
          initialName="Merna"
          initialAge={21}
          initialSchool="APU"
          initialPassion="Blockchain Tech"
        />
        <EditButton />
      </div>
    </main>
  );
};

export default MyComponent;