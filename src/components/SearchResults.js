import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_RESULTS_API } from "../utils/constants";
import { Link, useSearchParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import VideoCard from "./VideoCard";

const SearchResults = () => {
  const queryParams = useSearchParams();
  const searchQuery = queryParams[0].get("search_query");
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    retrieveSearchResults();
  }, [searchQuery]);

  // retrieve search result "videos"
  async function retrieveSearchResults() {
    const data = await fetch(
      YOUTUBE_SEARCH_RESULTS_API +
        searchQuery +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_DATA_API_KEY
    );
    const searchResult = await data.json();
    setVideos(searchResult.items);
  }

  if (!videos) return <Shimmer></Shimmer>;
  return (
    <div className="p-10 mx-10 mt-20">
      <div className="flex flex-wrap">
        {videos.map((video) => {
          return (
            video.id.kind === "youtube#video" && (
              <Link key={video.id.videoId} to={"/watch?v=" + video.id.videoId}>
                <VideoCard key={video.id.videoId} videoDetails={video} />
              </Link>
            )
          );
        })}
      </div>
    </div>
  );
};

export default SearchResults;
