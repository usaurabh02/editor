import React, { useState } from "react";
import { FaVideo } from "react-icons/fa";

export const Overlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="absolute top-3 left-3">
      <button
        onClick={handleClick}
        className="bg-black flex gap-1 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded"
      >
        <div className="font-[20px] italic">
        {isPlaying ? 'Online' : 'Meeting'}  </div>
        <div className="mt-[2px]">
          {isPlaying ? <FaVideo size={20} color="green" /> : <FaVideo size={20} />}
        </div>
      </button>
    </div>
  );
};
