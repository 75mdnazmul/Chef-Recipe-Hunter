// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7-vxoOtpnvJC6uFBeVLZMG0S53_aUMXY",
  authDomain: "chef-recipe-hunter-assig-c605e.firebaseapp.com",
  projectId: "chef-recipe-hunter-assig-c605e",
  storageBucket: "chef-recipe-hunter-assig-c605e.appspot.com",
  messagingSenderId: "75650904568",
  appId: "1:75650904568:web:c04055fa2cea666548660d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;