// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,} from 'firebase/auth'
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBsWWtmYZtIL1kZJ12n3Ey8Asrzy9III1Q",
  authDomain: "pageboult--login.firebaseapp.com",
  projectId: "pageboult--login",
  storageBucket: "pageboult--login.appspot.com",
  messagingSenderId: "74353875548",
  appId: "1:74353875548:web:74c7df8a6ac57296fa2499"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const storage = getStorage(app);
