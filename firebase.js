import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"; 

const firebaseConfig = {
    apiKey: AIzaSyC-1lUo92-GwC-KMZ8xEEAtGBpB43yADRs,
    authDomain: mmcmovies-6ebd1.firebaseapp.com,
    projectId: mmcmovies-6ebd1,
    storageBucket: mmcmovies-6ebd1.appspot.com,
    messagingSenderId:379699876821,
    appId: 1:379699876821:web:420e2a806990055808235c
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
