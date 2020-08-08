import React from "react";
import { Link } from "react-router-dom";
import { signInWithGoogle } from "../Firebase/Firebase";

function Home() {
  return (
    <div className="grid grid-cols-2  divide-red-900  min-h-0 mt-48 w-4/5 mx-auto">
      <div className="flex justify-center  bg-white shadow-xl">
        <form class=" rounded px-8 pt-6 pb-8  w-full">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-center ">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
      <div className="flex  flex-col justify-center items-center ml-4">
        <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 w-full">
          <div class="mb-4">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
            />
          </div>
          <div class="mb-6">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex flex-col items-center justify-center ">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6"
              type="button"
            >
              Sign In
            </button>

            <p className="mb-6">or</p>
            <div className="flex justify-evenly  w-full">
              <Link to="/Blogger">Twitter</Link>
              <Link to="/Blogger">Facebook</Link>
              <Link to="/Blogger">Github</Link>
              <Link to="/Blogger" onClick={signInWithGoogle}>
                google
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Home;
