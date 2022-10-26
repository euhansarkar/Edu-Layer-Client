// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDl8mloSxcs8d9B1Cix87w5x5zC2yKDMI0",
  authDomain: "edu-layer.firebaseapp.com",
  projectId: "edu-layer",
  storageBucket: "edu-layer.appspot.com",
  messagingSenderId: "478109368269",
  appId: "1:478109368269:web:66540018b88f91ae3c0e84"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;