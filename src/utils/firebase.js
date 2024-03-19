// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfCshgJIM59D6D_VaRXTAdrTvNYShd-gU",
  authDomain: "my-ce371.firebaseapp.com",
  projectId: "my-ce371",
  storageBucket: "my-ce371.appspot.com",
  messagingSenderId: "247007260432",
  appId: "1:247007260432:web:86c9533afb612210263f95",
  measurementId: "G-2FN18K0SPT",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
