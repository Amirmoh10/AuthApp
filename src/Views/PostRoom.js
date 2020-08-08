// import React from "react";
// import { auth, firestore } from "../Firebase/Firebase";

// function PostRoom() {
//   const [title, setTitle] = React.useState("");
//   const [body, setBody] = React.useState("");
//   const [posts, setPosts] = React.useState([]);

//   React.useEffect(() => {
//     const unsubscribe = firestore.collection("posts").onSnapshot((snapshot) => {
//       const posts = snapshot.docs.map((doc) => ({
//         id: doc.id,
//         ...doc.data(),
//       }));
//       setPosts(posts);
//     });

//     return () => {
//       unsubscribe();
//     };
//   }, []);

//   function addPost() {
//     const newPost = {
//       postTitle: title,
//       postBody: body,
//     };
//     firestore.collection("posts").add(newPost);
//   }

//   function deletePost(id) {
//     firestore.doc(`posts/${id}`).delete();
//   }
//   return (
//     <div className="flex flex-col w-1/2  mt-2 mx-auto overflow-y-auto ">
//       <div className="flex flex-col items-center border-b border-teal-500 py-2 my-2">
//         <input
//           className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//           type="text"
//           placeholder="Title"
//           onChange={(event) => setTitle(event.target.value)}
//         />
//       </div>
//       <div className="flex flex-col items-center border-b border-teal-500 py-2">
//         <input
//           className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//           type="text"
//           placeholder="body"
//           onChange={(event) => setBody(event.target.value)}
//         />
//       </div>
//       <button
//         className=" bg-teal-400 text-white my-2 focus:outline-none "
//         onClick={addPost}
//       >
//         Post your blog
//       </button>
//       {posts.length > 0 ? (
//         <div>
//           {posts.map((post) => {
//             return (
//               <div key={post.id} className=" rounded  shadow-lg my-2">
//                 <div className="px-6 py-4">
//                   <div className="font-bold text-xl mb-2">{post.postTitle}</div>
//                   <p className="text-gray-700 text-base">{post.postBody}</p>
//                 </div>
//                 <div className="px-6 py-4">
//                   <button
//                     className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
//                     onClick={() => deletePost(post.id)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       ) : null}
//     </div>
//   );
// }

// export default PostRoom;
