import BG from "../Images/BG.jpg"
import Header from "./Header";
const Browse =()=>{
    return(
        <div className="bg-black">
            <div><Header/></div>
            <img className="bg-cover w-screen absolute top-0 bottom-0 left-0 right-0 h-[100%] w-[100%] " src={BG} alt="Bg"/>
        </div>
    )
}
export default Browse;