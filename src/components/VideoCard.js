import { useEffect, useState } from "react";
import { YOUTUBE_CHANNEL_API } from "../utils/constants";

function formatNumber(number) {
  // Handle numbers less than a thousand
  if (number < 1000) {
    return number.toString();
  }
  // Handle numbers in thousands (use K symbol)
  if (number < 1000000) {
    const formattedNumber = (number / 1000).toFixed(1);
    return formattedNumber + "K";
  }
  // Handle numbers in millions (use M symbol)
  if (number < 1000000000) {
    const formattedNumber = (number / 1000000).toFixed(1);
    return formattedNumber + "M";
  }
  // Handle numbers in billions (use B symbol)
  const formattedNumber = (number / 1000000000).toFixed(1);
  return formattedNumber + "B";
}

const VideoCard = ({ videoDetails }) => {
  const [channelDetails, setChannelDetails] = useState(null);
  const viewCount = formatNumber(videoDetails?.statistics?.viewCount);
  const channel = videoDetails.snippet.channelTitle;
  const title = videoDetails.snippet.title;
  const thumbnail = videoDetails.snippet.thumbnails?.medium.url;
  const timeAgo = convertToTimeAgo(videoDetails.snippet.publishedAt);

  useEffect(() => {
    getChannelData();
  }, []);

  async function getChannelData() {
    const channelData = await fetch(
      YOUTUBE_CHANNEL_API +
        videoDetails.snippet.channelId +
        "&key=" +
        process.env.REACT_APP_YOUTUBE_DATA_API_KEY
    );
    const json = await channelData.json();
    setChannelDetails(json.items[0]);
  }

  return (
    <div className="cursor-pointer m-4 p-2 w-80">
      <img src={thumbnail} alt="thumbnail" className="rounded-lg" />
      <div className="flex">
        {channelDetails && (
          <div>
            <img
              src={channelDetails.snippet.thumbnails.default.url}
              alt="channelIcon"
            />
          </div>
        )}
        <h1 className="mt-3">{title}</h1>
      </div>
      <h5 className="text-gray-500 ml-2">{channel}</h5>
      <h5 className="text-gray-500  ml-2">
        {viewCount} views • {timeAgo}
      </h5>
    </div>
  );
};

function convertToTimeAgo(dateString) {
  // Parse the ISO 8601 date string
  const date = new Date(dateString);

  // Get today's date
  const today = new Date();

  // Calculate the time difference in milliseconds
  const timeDiffMs = today.getTime() - date.getTime();

  // Convert milliseconds to days
  const daysAgo = Math.floor(timeDiffMs / (1000 * 60 * 60 * 24));

  // If less than a day, calculate hours
  if (daysAgo < 1) {
    const hoursAgo = Math.floor(timeDiffMs / (1000 * 60 * 60));
    if (hoursAgo === 0) {
      return "just now"; // If less than an hour, return "just now"
    } else {
      return `${hoursAgo} hour(s) ago`;
    }
  }

  // If less than a week, calculate days
  if (daysAgo < 7) {
    return `${daysAgo} day(s) ago`;
  }

  // If less than a month, calculate weeks
  if (daysAgo < 30) {
    const weeksAgo = Math.floor(daysAgo / 7);
    return `${weeksAgo} week(s) ago`;
  }

  // Otherwise, return months ago
  const monthsAgo = Math.floor(daysAgo / 30);
  return `${monthsAgo} month(s) ago`;
}

export default VideoCard;
