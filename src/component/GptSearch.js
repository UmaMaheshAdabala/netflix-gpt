import GptMovieSuggestion from "./GptMovieSuggestion";
import GptsearchBar from "./GptsearchBar";
import BG from "../Images/BG.jpg";

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG} alt="Background"></img>
      </div>
      <GptsearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
