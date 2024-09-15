import GptMovieSuggestion from "./GptMovieSuggestion"
import GptsearchBar from "./GptsearchBar"
import BG from "../Images/BG.jpg"

const GptSearch = () => {
  return (
    <div>
        <div className="absolute -z-10">
            <img src={BG}></img>
        </div>
        <GptsearchBar/>
      <GptMovieSuggestion/>
    </div>
  )
}

export default GptSearch
