import React from 'react';

interface ProgressBarProps {
    percentage: number;
    label: string;
  }
  
  export default function ProgressBar({ percentage, label }: ProgressBarProps) {
    return (
      <div className="mb-4">
        <p className="text-sm font-medium mb-1">{label}</p>
        <div className="w-full bg-blue-500 h-6 rounded-full overflow-hidden border border-red-500">
          <div
            className="bg-yellow-500 h-full"
            style={{ width: `${percentage}%`, minWidth: '20px' }}
          ></div>
        </div>
      </div>
    );
  }
