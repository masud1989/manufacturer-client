// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDERID,
//   appId: process.env.REACT_APP_APP_ID
// };


const firebaseConfig = {
  apiKey: "AIzaSyDVjdoTqelQ_Jprgx1pgiHH2VXh9Er4gkE",
  authDomain: "hand-tools-center.firebaseapp.com",
  projectId: "hand-tools-center",
  storageBucket: "hand-tools-center.appspot.com",
  messagingSenderId: "479729011963",
  appId: "1:479729011963:web:15ba89851070907ba5b45e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;

