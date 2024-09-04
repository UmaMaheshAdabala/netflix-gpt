import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const getTrailer = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    // console.log(json);
    const filterTrailers = json?.results.filter(
      (video) => video.type === "Trailer"
    );
    const Trailer = filterTrailers.length
      ? filterTrailers[0]
      : json?.results[0];
    // console.log(Trailer);
    dispatch(addTrailer(Trailer));
  };
  useEffect(() => {
    getTrailer();
  }, []);
};
export default useMovieTrailer;
