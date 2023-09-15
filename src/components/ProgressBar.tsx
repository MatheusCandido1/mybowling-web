import React, { useState, useEffect } from 'react';

interface ProgressBarProps {
  value: number;
  maxValue: number;
}

const ProgressBar = ({ value, maxValue }: ProgressBarProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((value / maxValue) * 100);
  }, [value, maxValue]);

  return (
    <div className="relative pt-4">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-teal-600 bg-teal-200">
            Current Score: 200
          </span>
        </div>
        <div className="text-right">
          <span className="text-xs font-semibold inline-block text-teal-600">
            300
          </span>
        </div>
      </div>
      <div className="h-4 bg-gray-200 rounded-full">
        <div
          style={{ width: `${progress}%` }}
          className="h-full bg-teal-600 rounded-full transition-all duration-300"
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
