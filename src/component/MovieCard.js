import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({posterPath}) => {
    return (
        <div className="w-40 pr-2">
            <img alt="MovieCard" src={IMG_CDN_URL + posterPath}/>
        </div>
    )
};
export default MovieCard;