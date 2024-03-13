import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { YOUTUBE_MOST_POPULAR_VIDEOS } from "../utils/constants";
import VideoCard from "./VideoCard";
import Shimmer from "./Shimmer";

const VideoContainer = () => {
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    getPopularVideos();
  }, []);

  const getPopularVideos = async () => {
    const videos = await fetch(YOUTUBE_MOST_POPULAR_VIDEOS);
    const json = await videos.json();
    setVideos(json);
  };

  if (!videos) return <Shimmer></Shimmer>;
  return (
    <div className="flex flex-wrap">
      {videos.items.map((video) => {
        //video.id
        return <VideoCard videoDetails={video} />;
      })}
    </div>
  );
};

export default VideoContainer;
