// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHEFG5mRKtTgP4N8bcDSpC3Gu8zVNVKTM",
  authDomain: "ph-assignment-9-5c9a4.firebaseapp.com",
  projectId: "ph-assignment-9-5c9a4",
  storageBucket: "ph-assignment-9-5c9a4.appspot.com",
  messagingSenderId: "722266059671",
  appId: "1:722266059671:web:d8ecdbd679151ec16e0ad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;