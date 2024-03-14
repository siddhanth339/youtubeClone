import { useSearchParams } from "react-router-dom";

const WatchContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoID = searchParams.get("v");

  return (
    <div className="p-10 mx-10 mt-20">
      <iframe
        width="1080"
        height="560"
        src={
          "https://www.youtube.com/embed/" + videoID + "?si=NGg2GYVX6iIjCIHr"
        }
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchContainer;
