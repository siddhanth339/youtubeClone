import React from "react";
import { Link } from "react-router-dom";

const SideBarItem = ({ name }) => {
  return (
    <Link>
      <div className="p-2 m-2 hover:bg-gray-200 rounded-lg cursor-pointer">
        {name}
      </div>
    </Link>
  );
};

export default SideBarItem;
