import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle, signInWithGithub, auth } from "../Firebase/Firebase";

function Home() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function SignIn() {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className=" flex flex-col items-center justify-center font">
      <form className=" shadow-xl rounded-lg px-8 pt-6 pb-8  ">
        <div className="flex flex-col items-center justify-center text-black  ">
          <p className="font-bold pb-4">Already have an account? </p>
          <p className="pb-6">Sign in with email and password </p>
        </div>
        <div className="mb-10">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            className="shadow-md appearance-none border text-black bg-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="Email"
            type="text"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-10">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            className="shadow-md appearance-none border text-black bg-white rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex flex-col items-center justify-center ">
          <Link
            className=" text-white py-2 px-4 rounded focus:outline-none shadow-md mb-6 Link"
            type="button"
            onClick={SignIn}
            to="/Blogger"
          >
            Sign In
          </Link>

          <p className="mb-6">or</p>
          <div className="flex justify-evenly  w-full text-white mb-6   border-b-2 border-gray-600 pb-6  ">
            <Link
              to="/Blogger"
              onClick={signInWithGithub}
              className=" py-2 px-4 rounded Link shadow-md"
            >
              Github
            </Link>
            <Link
              to="/Blogger"
              onClick={signInWithGoogle}
              className=" py-2 px-4 rounded Link shadow-md"
            >
              Google
            </Link>
          </div>
          <div className=" h-20 flex flex-col items-center justify-center">
            <p>Do not have an account?</p>
            <Link
              to="/SignUp"
              className=" mt-2 py-2 px-4 text-white rounded Link shadow-md"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Home;
