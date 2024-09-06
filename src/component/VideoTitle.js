const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-40 px-24  absolute bg-gradient-to-r from-black w-[100vh] h-[100vh] text-white">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6 ">{overview}</p>
      <div>
        <button className="bg-gray-500 text-black font-bold p-4 px-12 text-lg bg-white rounded-lg">
         Play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">
          More info 
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
