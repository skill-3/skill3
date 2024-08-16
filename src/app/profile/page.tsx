"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import ProgressBar from '../component/ProgressBar';
import RadarChart from '../component/RadarChart';
import DataGridView from '../component/DataGridEvent';

const data = {
  labels: [
    'Cognitive Abilities',
    'Emotional Intelligence',
    'Adaptability',
    'Technical Ability',
    'Leadership Ability',
    'Social Abilities',
  ],
  datasets: [
    {
      label: 'Skill Levels',
      data: [100, 59, 90, 81, 56, 55],
      backgroundColor: 'rgba(34, 202, 236, 0.2)',
      borderColor: 'rgba(34, 202, 236, 1)',
      borderWidth: 2,
    },
  ],
};

const initialRows = [
  { id: 1, no: 1, event: 'Event 1', achievement: 'Achievement 1' },
  { id: 2, no: 2, event: 'Event 2', achievement: 'Achievement 2' },
  { id: 3, no: 3, event: 'Event 3', achievement: 'Achievement 3' },
];



export default function Page() {
  const [rows, setRows] = useState(initialRows);

  // Function to handle data update (could be from user input)
  const updateData = (newData: { id: number; no: number; event: string; achievement: string }[]) => {
    setRows(newData);
  };


  return (
    <div className="flex flex-col items-start h-screen p-4">
    <div className="flex items-start">
      <Image
        src="/User  03C.png"
        width={100}
        height={100}
        className="rounded-full border-4 border-gray-300 my-4"
        alt="Profile photo"
      />
      <div className="ml-4 h-[150px] flex flex-col justify-center">
        <p>Name: Merna</p>
        <p>Age: 21</p>
        <p>School: APU</p>
        {
          //here is to show the user information
        }
      </div>

      <div className="ml-[-200px] flex flex-col justify-center mt-[150px]">
        <p className="text-lg font-semibold">Major Skill</p>
      </div>

      </div>
      <div className="p-4 w-1/3">
      <ProgressBar percentage={20} label="Front End" />
      <ProgressBar percentage={50} label="Back End" />
      <ProgressBar percentage={75} label="AI" />
      <ProgressBar percentage={90} label="Data Analysis" />
      {/* here is to put for the bar */}
      </div>

      <div className="w-full h-screen">
        <div className="flex justify-end items-center h-full mt-[-320px] -translate-x-80">
          <div className="w-96 h-96">
            <RadarChart data={data} />
          </div>
        </div>
      </div>

      <div className="ml-[15px] mt-[-80px] flex flex-col justify-center"> {/* 调整或去掉负 margin */}
        <p className="text-lg font-semibold">Recent Achievement</p>
      </div>

      <div className="mt-4 ml-3 w-3/4 h-[600px]">
        <DataGridView rows={rows} />
      </div>

      <div className="w-full h-screen">
        <div className="flex flex-col items-start justify-center h-full ml-[630px] mt-[-500px]">
          <p className="text-lg font-semibold">Prefer Improvement:</p>
          <p className="break-words mt-2">Recommended to focus on AI field</p>
        </div>
      </div>

 


    </div>
  );
}
