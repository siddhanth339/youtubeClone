import VideoContainer from "./VideoContainer";

const MainContainer = () => {
  return (
    <div>
      <div className="ml-7 mt-20">
        <button className="p-2 m-2 rounded-lg bg-gray-300 hover:bg-gray-400 font-semibold">
          All
        </button>
        <button className="p-2 m-2 rounded-lg bg-gray-300 hover:bg-gray-400 font-semibold">
          Music
        </button>
        <button className="p-2 m-2 rounded-lg bg-gray-300 hover:bg-gray-400 font-semibold">
          Gaming
        </button>
        <button className="p-2 m-2 rounded-lg bg-gray-300 hover:bg-gray-400 font-semibold">
          Trending
        </button>
        <button className="p-2 m-2 rounded-lg bg-gray-300 hover:bg-gray-400 font-semibold">
          Trailers
        </button>
      </div>
      <div className="ml-7">
        <VideoContainer></VideoContainer>
      </div>
    </div>
  );
};

export default MainContainer;
