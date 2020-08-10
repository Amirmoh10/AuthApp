import React from "react";
import { Link } from "react-router-dom";
import { signOut } from "../Firebase/Firebase";

function Blogger({ currentUser }) {
  if (currentUser) {
    var moment = require('moment'); // require

     
    return (
      <div className="flex flex-col items-center mt-4 sm:auto md:w-auto lg:w-auto">
        <div className=" bg-white mx-auto  mb-1 rounded  shadow-lg">
          <div className=" flex flex-row justify-center">
            <div className="w-1/2 h-30 "></div>
          </div>
          <div className="px-6 py-4 ">
            <div className="  mb-2  flex justify-start text-black ">
              Name: {currentUser.displayName}
            </div>
            <div className="  mb-2 flex justify-start text-black ">
              Email: {currentUser.email}
            </div>

            <div className="  mb-2  flex justify-start text-black ">
              Joined: {moment(currentUser.createdAt.toDate()).calendar()}
            </div>
          </div>
          <div className="px-6 py-4  flex justify-evenly">
            <Link
              className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline Link"
              type="button"
              onClick={signOut}
              to="/"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

// <div className=" w-1/2 mt-1 flex justify-center h-12 mx-auto bg-teal-400">
//   //{" "}
//   <Link className="text-white text-2xl  " to="/PostRoom">
//     // Create your blog //{" "}
//   </Link>
// </div>;
// <img
//   className="h-30 bg-cover bg-center rounded-full pt-2"
//   src={currentUser.photoURL}
//   alt="Sunset in the mountains"
// />;
export default Blogger;
