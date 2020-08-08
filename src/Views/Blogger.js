import React from "react";

function Blogger({ currentUser }) {
  if(currentUser)
  {
  return (
    <div className="flex flex-col items-center mt-4 ">
      <div className="mx-auto w-1/2 h-1/3  mb-1 rounded overflow-hidden shadow-lg">
        <div className=" flex flex-row justify-center">
          <div className="w-1/2 h-30 ">
            <img
              className="h-30 bg-cover bg-center rounded-full pt-2"
              src={currentUser.photoURL}
              alt="Sunset in the mountains"
            />
          </div>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-lg mb-2 flex justify-center text-teal-400 ">
            {currentUser.displayName}
          </div>
        </div>
        <div className="px-6 py-4  flex justify-evenly">
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-teal-400 shadow-md ">
            #React
          </span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-teal-400 shadow-md">
            #JavaScript
          </span>
          <span className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-teal-400 shadow-md">
            #CSS
          </span>
        </div>
      </div>
    </div>
  );
  }
  else{
    return null
  }
}

// <div className=" w-1/2 mt-1 flex justify-center h-12 mx-auto bg-teal-400">
//   //{" "}
//   <Link className="text-white text-2xl  " to="/PostRoom">
//     // Create your blog //{" "}
//   </Link>
// </div>;
export default Blogger;
