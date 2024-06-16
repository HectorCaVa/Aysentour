// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXdIsrBEyfwuoOx-fxladWuqZVSyLacRw",
  authDomain: "concha-de-sus-mares.firebaseapp.com",
  projectId: "concha-de-sus-mares",
  storageBucket: "concha-de-sus-mares.appspot.com",
  databaseURL: "https://concha-de-sus-mares-default-rtdb.firebaseio.com/",
  messagingSenderId: "659281324835",
  appId: "1:659281324835:web:d479ad67304062080b3a96",
  measurementId: "G-Z8HRJ6G1M8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };

