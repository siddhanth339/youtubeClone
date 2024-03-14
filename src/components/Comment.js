import React from "react";
import { USER_ICON } from "../utils/constants";

const Comment = ({ commentDetails }) => {
  return (
    <div className="flex m-2">
      <img className="w-10 h-10 mx-1" src={USER_ICON} alt="user icon"></img>
      <div className="bg-gray-200 rounded-lg ml-2 p-1">
        <h6>{commentDetails.name}</h6>
        <p className="text-xs">{commentDetails.text}</p>
      </div>
    </div>
  );
};

export default Comment;
