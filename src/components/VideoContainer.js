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
        return (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <VideoCard key={video.id} videoDetails={video} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
