import React from "react";
import { Link } from "react-router-dom";
import { auth, createUserProfileDocument } from "../Firebase/Firebase";
import firebase from "../Firebase/Firebase";

function SignUp() {
  const [displayName, setDisplayName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  async function SignUp() {
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className=" flex flex-col items-center justify-center ">
      <form className=" shadow-xl rounded-lg px-8 pt-6 pb-8  mt-10">
        <div className="flex flex-col items-center justify-center">
          <p className="font-bold pb-2">I do not have an account? </p>
          <p className="pb-6">Sign up with email and password </p>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Name</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="NAME"
            type="text"
            placeholder="name"
            onChange={(event) => setDisplayName(event.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2">Email</label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="text"
            placeholder="Email"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold mb-2">Password</label>
          <input
            className="shadow appearance-none border  rounded w-full py-2 px-3 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="******************"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="flex items-center justify-center ">
          <Link
            className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline Link"
            type="button"
            onClick={SignUp}
            to="/Blogger"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
