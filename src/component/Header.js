import { onAuthStateChanged, signOut } from "firebase/auth";
import user_logo from "../Images/user_logo.png";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchview } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
  }, []);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };
  const user = useSelector((store) => store.user);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchview());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  return (
    <div className="absolute w-[100%]  bg-gradient-to-b from-black z-10 flex justify-between flex-wrap">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-40"
      />

      {user && (
        <div className="flex  m-2 p-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-purple-800 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="py-2 px-4 mx-4  bg-purple-800 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Home Page" : "GPT Search"}
          </button>
          <img alt="userIcon" className="w-8 h-8" src={user_logo} />
          <button className="text-red-500 p-2">⮟</button>

          <button className="font-bold text-white pl-2" onClick={handleSignOut}>
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
