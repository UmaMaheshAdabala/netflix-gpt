import BG from "../Images/BG.jpg"
import Header from "./Header";
const Browse =()=>{
    return(
        <div>
            <div><Header/></div>
            <img className="bg-cover w-screen" src={BG} alt="Bg"/>
        </div>
    )
}
export default Browse;