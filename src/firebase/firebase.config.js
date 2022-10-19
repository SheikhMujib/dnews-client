// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4ZsI8iC8FGr1eA-pBklDxjxtfMjkhWC8",
  authDomain: "dnews-client.firebaseapp.com",
  projectId: "dnews-client",
  storageBucket: "dnews-client.appspot.com",
  messagingSenderId: "228848785331",
  appId: "1:228848785331:web:3a769d9bb07bcd7c575dc6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
