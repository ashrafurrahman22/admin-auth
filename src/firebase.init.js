// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCCa3ulnWVodAzb7qHtJL-P72Zq2lZKpi8",
  authDomain: "admin-auth-85848.firebaseapp.com",
  projectId: "admin-auth-85848",
  storageBucket: "admin-auth-85848.appspot.com",
  messagingSenderId: "581850969883",
  appId: "1:581850969883:web:d18555608b43f333d6c5be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;