// // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCqeclPAqDsyjHHuh7H_7Mw5UKSxD1X06g",
  authDomain: "project-cdacf.firebaseapp.com",
  projectId: "project-cdacf",
  storageBucket: "project-cdacf.appspot.com",
  messagingSenderId: "1041046020237",
  appId: "1:1041046020237:web:73c2ff31262c670cdb42c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;


 // apiKey:import.meta.env.VITE_apiKey,
  // authDomain:import.meta.env.VITE_authDomain,
  // projectId:import.meta.env.VITE_projectId,
  // storageBucket:import.meta.env.VITE_storageBucket,
  // messagingSenderId:import.meta.env.VITE_messagingSenderId,
  // appId:import.meta.env.VITE_appId