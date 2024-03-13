import { useDispatch } from "react-redux";
import { HAMBURGER_ICON, USER_ICON, YOUTUBE_LOGO } from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <button onClick={handleClick}>
          <img
            className="w-10 p-2 m-2"
            src={HAMBURGER_ICON}
            alt="sidePanelIcon"
          ></img>
        </button>

        <img className="h-10 m-2" src={YOUTUBE_LOGO} alt="logo"></img>
      </div>
      <div className="ml-10 mt-2 col-span-10">
        <input
          className="w-3/4 p-2 rounded-l-full border border-solid border-gray-400"
          type="text"
          placeholder="Search"
        ></input>
        <button className="p-2 rounded-r-full border border-solid border-gray-400">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img className="w-12 m-2" src={USER_ICON} alt="user icon"></img>
      </div>
    </div>
  );
};

export default Header;
