// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHEKZzHwOyjuisOdI5kDx0pgi-HMdfVuE",
  authDomain: "coderreact-1919a.firebaseapp.com",
  projectId: "coderreact-1919a",
  storageBucket: "coderreact-1919a.appspot.com",
  messagingSenderId: "1076094686068",
  appId: "1:1076094686068:web:02bf544fea2b7257c95221",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getData = () => getFirestore(app);
