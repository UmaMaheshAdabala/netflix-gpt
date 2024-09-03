import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const navigate = useNavigate();
  const [signIn, setSignIn] = useState(true);

  const dispatch = useDispatch();
  const [errMessage, setErrMessage] = useState();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  const handleSubmit = () => {
    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrMessage(message);
    console.log(password.current.value);
    if (message !== null) return; // if there is error in validation.
    // if no error Sign in/ Sign up

    //SignUp...
    if (!signIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://example.com/jane-q-user/profile.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {});
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
    // SignIn...
    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
  };
  return (
    <div className="">
      <Header />
      <div className="bg-black absolute">
        <img
          className="opacity-50 w-[12800px]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="img"
        />
      </div>
      <form
        className="absolute w-3/12 align-middle bg-black my-36 mx-auto right-0 left-0 p-8 bg-opacity-70 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <h1 className="text-white text-3xl font-bold m-4 p-1">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            ref={name}
            type="text"
            placeholder="Name"
            className="m-4 p-2 bg-gray-700 w-full  text-white"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Addesss"
          className="m-4 p-2 bg-gray-700 w-full  text-white"
        />
        <br />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="m-4 p-2 bg-gray-700 w-full text-white"
        />
        <br />
        <p className="text-red-500 font-bold px-0.5 mx-4">{errMessage}</p>
        <button
          className="text-white m-4 p-2 bg-red-500 w-full opacity-100"
          onClick={handleSubmit}
        >
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white py-4 px-2 cursor-pointer"
          onClick={toggleSignIn}
        >
          {signIn ? "New to Netflix? Sign Up Now" : "Already a user? Sign In"}
        </p>
      </form>
    </div>
  );
};
export default Login;
