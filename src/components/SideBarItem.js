import React from "react";

const SideBarItem = ({ name }) => {
  return (
    <div className="p-2 m-2 hover:bg-gray-200 rounded-lg cursor-pointer">
      {name}
    </div>
  );
};

export default SideBarItem;
