import { signOut } from "firebase/auth";
import user_logo from "../Images/user_logo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


const Header = () => {
  const navigate = useNavigate();
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      
    });
  }
  const user = useSelector((store) => store.user);
  return (
    <div className="absolute w-[100%]  bg-gradient-to-b from-black z-10 flex justify-between flex-wrap">
      
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo" className="w-40"
        />
      
      {user && <div className="flex  m-2 p-2">
        <img alt="userIcon" className="w-8 h-8" src={user_logo} />
        <button className="text-red-500 p-2">⮟</button>

        <button className="font-bold text-white pl-2" onClick={handleSignOut}>(SignOut)</button>
      </div>}
    </div>
  );
};
export default Header;
