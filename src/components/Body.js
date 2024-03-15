import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import Header from "./Header";

const Body = () => {
  return (
    <div className="flex">
      <Header />
      <SideBar />
      <Outlet />
    </div>
  );
};

export default Body;
