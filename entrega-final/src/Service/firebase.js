// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCj8CPUSINf7p6o4NvQWHAhEoJGi48ubPI",
  authDomain: "react-nico-7853f.firebaseapp.com",
  projectId: "react-nico-7853f",
  storageBucket: "react-nico-7853f.appspot.com",
  messagingSenderId: "970229525994",
  appId: "1:970229525994:web:7137993a7f914c19365693",
  measurementId: "G-2V0XLNS4Z1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const nf = getAnalytics(app);
export default nf;

