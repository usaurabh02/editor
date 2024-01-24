import React, { useState } from "react";
import { FaMicrophone, FaMicrophoneSlash } from "react-icons/fa";
import Profile from "../asssets/Profile.jpeg"

export const Meeting = () => {
const [isAudioOn, setAudioOFF] = useState(true)

const handleClick = () => {
    setAudioOFF(!isAudioOn);
}

  return (
    <div className="absolute top-3 left-3">
      <div className="w-[160px] h-[130px] bg-gray-700 rounded-[5px]">
      <div className="h-full flex items-center justify-center">
      <div className="w-[50px] h-[50px] bg-slate-200 rounded-full flex items-center justify-center overflow-hidden">
      <img src={Profile} alt="user-profile" className="object-cover w-full h-full rounded-full" />
      </div>
        <div className="absolute min-w-0 max-w-xs bottom-1 left-1  flex justify-center items-center rounded-[5px] px-1 bg-[#B6AFAE]">
          <p className="[text-align-last:center] rounded-2xl text-[10px] font-segoe-ui text-white text-left">
            Saurabh
          </p>
        </div>
        <button onClick={handleClick} className="absolute bottom-1 right-1 w-[20px] h-[20px] flex px-1 justify-center  items-center rounded-full bg-[#EDEEF0]">
        {isAudioOn ? (<FaMicrophoneSlash className="w-5 h-5 overflow-hidden  fill-[#3F3960]" />) : (<FaMicrophone className="w-3 h-3 overflow-hidden fill-[#008000]" />)}
        </button>
      </div>
      </div>
    </div>
  );
};
