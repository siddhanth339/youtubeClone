import { useSelector } from "react-redux";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const sideBarVisible = useSelector((store) => store.app.isMenuOpen);
  if (!sideBarVisible) return;
  return (
    <div className="shadow-xl h-screen">
      <SideBarItem name="Home"></SideBarItem>
      <SideBarItem name="Shorts"></SideBarItem>
      <SideBarItem name="Subscriptions"></SideBarItem>
      <div className="border border-gray-500 mx-2"></div>
      <SideBarItem name="History"></SideBarItem>
      <SideBarItem name="Watch later"></SideBarItem>
      <SideBarItem name="Liked Videos"></SideBarItem>
    </div>
  );
};

export default SideBar;
