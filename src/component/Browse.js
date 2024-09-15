import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRated from "../hooks/useTopRated";
import useUpComing from "../hooks/useUPComing";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
const Browse = () => {
  const showGptSearch=useSelector((store)=> store.gpt.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRated();
  useUpComing();
  return (
    <div >
      <Header />
      {showGptSearch && <GptSearch/>}
      {!showGptSearch && <><MainContainer/>
      <SecondaryContainer/></>}
    </div>
  );
};
export default Browse;
