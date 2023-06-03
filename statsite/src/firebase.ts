import {initializeApp}  from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAR0lj96OeuYFZz_oyZRwVpC-3tMtXQh9g",
    authDomain: "hairybever-b239a.firebaseapp.com",
    projectId: "hairybever-b239a",
    storageBucket: "hairybever-b239a.appspot.com",
    messagingSenderId: "995446404607",
    appId: "1:995446404607:web:58e99ec3f0b8bf6231e3ca",
    measurementId: "G-RRCRT2FP42"
  };

// Initialize Firebase with the configuration
const app = initializeApp(firebaseConfig);

// Export the Firestore instance for use in other components
export const db = getFirestore(app);