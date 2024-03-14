import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
const WatchContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const videoID = searchParams.get("v");

  return (
    <div className="p-10 mx-10 mt-20">
      <iframe
        width="900"
        height="450"
        src={
          "https://www.youtube.com/embed/" + videoID + "?si=NGg2GYVX6iIjCIHr"
        }
        title="YouTube video player"
        allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h1 className="font-bold p-2">Comments</h1>
      <CommentsContainer />
    </div>
  );
};

export default WatchContainer;
