import React from "react";

interface ProgressBarProps {
  percentage: number;
  label: string;
}

export default function ProgressBar({ percentage, label }: ProgressBarProps) {
  return (
    <div className="mb-4">
      <p className="text-sm font-medium mb-1">{label}</p>
      <div className="w-full bg-sky-600/20 h-6 rounded-full overflow-hidden">
        <div
          className="bg-sky-400 h-full"
          style={{ width: `${percentage}%`, minWidth: "20px" }}
        ></div>
      </div>
    </div>
  );
}
