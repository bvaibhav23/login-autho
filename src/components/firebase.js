// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDPFiA898bDizhH0ZrVlxmVkUor6sHtQk4",
    authDomain: "react-login-c80a9.firebaseapp.com",
    projectId: "react-login-c80a9",
    storageBucket: "react-login-c80a9.appspot.com",
    messagingSenderId: "291464962768",
    appId: "1:291464962768:web:bfb9be71ac34aa7f5174d5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;