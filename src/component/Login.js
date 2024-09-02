import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const toggleSignIn = () => {
    setSignIn(!signIn);
  };
  return (
    <div className="">
      <Header />
      <div className="bg-black absolute">
        <img
          className="opacity-50 "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/dae1f45f-c2c5-4a62-8d58-6e1b0c6b2d8e/6d1fb8a4-5844-42a4-9b01-1c6c128acf19/IN-en-20240827-TRIFECTA-perspective_WEB_c292a608-cdc6-4686-8dc8-405bfcf753af_large.jpg"
          alt="img"
        />
      </div>
      <form className="absolute w-3/12 align-middle bg-black my-36 mx-auto right-0 left-0 p-8 bg-opacity-70 rounded-lg">
        <h1 className="text-white text-3xl font-bold m-4 p-1">
          {signIn ? "Sign In" : "Sign Up"}
        </h1>
        {!signIn && (
          <input
            type="text"
            placeholder="Name"
            className="m-4 p-2 bg-gray-700 w-full"
          />
        )}
        <input
          type="email"
          placeholder="Email Addesss"
          className="m-4 p-2 bg-gray-700 w-full"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="m-4 p-2 bg-gray-700 w-full"
        />
        <br />
        <button className="text-white m-4 p-2 bg-red-700 w-full opacity-100 ">
          {signIn ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="text-white py-4 px-2 cursor-pointer"
          onClick={toggleSignIn}
        >
            {signIn? "New to Netflix? Sign Up Now": "Already a user? Sign In"}
          
        </p>
      </form>
    </div>
  );
};
export default Login;
