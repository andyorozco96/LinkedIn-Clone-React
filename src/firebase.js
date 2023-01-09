import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDzTlNrar7RGIbBegYdDAAxOJ2sBQA_Z94",
  authDomain: "linkedin-react-orozco-andres.firebaseapp.com",
  projectId: "linkedin-react-orozco-andres",
  storageBucket: "linkedin-react-orozco-andres.appspot.com",
  messagingSenderId: "131750371741",
  appId: "1:131750371741:web:724063bb8de0afc7b54f74",
};

/* Initialize our app from our personal firebaseConfig */
const app = initializeApp(firebaseConfig);

/* Get access to our database from our firebase App */
const db = getFirestore(app);

/* Get access to authentication from firebase */
const auth = getAuth(app);

/* Reference to "post" collection inside our DB */
const colPostsRef = collection(db, "posts");

/*----------- UTILITIES FOR POST COLECCTION --------------*/

/* Get real time data */

// const getDataFromPosts = onSnapshot(colPostsRef, (snapshot) => {
//   let posts = [];
//   snapshot.docs.forEach((doc) => {
//     posts.push({
//       ...doc.data(),
//       id: doc.id,
//     });
//   });

//   return posts;
// });

/* Add data to post colection */

export { colPostsRef };
