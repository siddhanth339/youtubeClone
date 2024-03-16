import React from "react";
import { USER_ICON } from "../utils/constants";

const ChatMessage = ({ name, text }) => {
  return (
    <div className="flex">
      <img
        className="w-5 h-5 m-2 rounded-full"
        src={USER_ICON}
        alt="user icon"
      ></img>
      <p className="text-xs flex items-center">
        <span className="font-bold">{name} </span>
        <span className="ml-1">{text} 🙏</span>
      </p>
    </div>
  );
};

export default ChatMessage;
