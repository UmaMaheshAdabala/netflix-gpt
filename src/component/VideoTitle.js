const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-36 px-12">
      <h1 className="font-bold text-6xl">{title}</h1>
      <p className="py-6  w-1/4">{overview}</p>
      <div>
        <button className="bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">
        ▶ play
        </button>
        <button className="mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg">
          More info ℹ️
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
