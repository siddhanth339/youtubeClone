import { useDispatch } from "react-redux";
import {
  HAMBURGER_ICON,
  USER_ICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_SUGGESTIONS_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { useAsyncError } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const handleClick = () => {
    dispatch(toggleMenu());
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => getSearchSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API + searchQuery);
    const suggestions = await data.json();
    setSuggestions(suggestions[1]);
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
          value={searchQuery}
          onChange={handleChange}
        ></input>
        {searchQuery.length !== 0 && (
          <ul className="m-2 p-2 fixed bg-white border rounded-xl shadow-xl w-[50%]">
            {suggestions.map((s) => (
              <li className="px-2 hover:bg-gray-100 rounded-sm" key={s}>
                {s}
              </li>
            ))}
          </ul>
        )}

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
