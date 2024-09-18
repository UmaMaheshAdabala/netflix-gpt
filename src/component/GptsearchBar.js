import openai from "../utils/openai";
import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptsearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    return json.results;
  };
  const handleClick = async () => {
    // const gptQuery =
    //   "Act as a Movie Recommendation system and suggest some movies for the query : " +
    //   searchText.current.value +
    //   ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: gptQuery }],
    //   model: "gpt-3.5-turbo",
    // });
    // if (!gptResults.choices) {
    //   console.log("Error!!!");
    // }
    // console.log(gptResults.choices[0]?.message?.content);
    // const movies = gptResults.choices[0]?.message?.content.split(", ");

    // As the Limit of OpenAI exceded so lets use dummy movie data below.
    const dummyMovies = [
      "Mathu Vadalara",
      "MAD",
      "Samajavaragamana",
      "Committee kurrollu",
      "Om Bheem Bush",
    ];
    const promiseArray = dummyMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    dispatch(
      addGptMovieResult({ movieNames: dummyMovies, movieResults: tmdbResults })
    );
    console.log(tmdbResults);
  };
  return (
    <div className="pt-[10%] flex justify-center ">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 col-span-9"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4  bg-red-700 text-white rounded-lg"
          onClick={handleClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptsearchBar;
