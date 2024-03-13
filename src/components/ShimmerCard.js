import React from "react";

const ShimmerCard = () => {
  return (
    <div className="w-80 m-3">
      <div className="w-full h-44 bg-gray-200 rounded-lg animate-pulse"></div>
      <div className="flex">
        <div className="my-2 w-12 h-12 rounded-full bg-gray-200"></div>
        <div>
          <div className="w-64 h-3 p-1 mx-1 mt-2 bg-gray-200 rounded-lg animate-pulse"></div>

          <div className="w-36 h-3 p-1 m-1 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
