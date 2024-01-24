import React, {useState} from 'react'
import { FaVideo, FaVideoSlash } from "react-icons/fa";
import { Meeting } from './Meeting';

export const Overlay = () => {

  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    setIsPlaying(!isPlaying);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className='absolute top-3 left-3'>
    <button onClick={handleClick} className="bg-black flex gap-1 hover:bg-gray-700 text-white font-bold py-2 px-2 rounded">
    <div onClick={openModal} className="font-[20px] italic">
        {isPlaying ? 'Live' : 'Meeting'}  </div>
        <div className="mt-[2px]">
          {isPlaying ? <FaVideo size={20} color="green" /> : <FaVideo size={20} />}
        </div>
      {isModalOpen && (
          <button
            onClick={closeModal}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            <Meeting />
          </button>
    )}
    </button>
    </div>
  )
}
