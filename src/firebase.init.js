// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    // apiKey:process.env.REACT_APP_apiKey,
    // authDomain:process.env.REACT_APP_authDomain,
    // projectId:process.env.REACT_APP_projectId,
    // storageBucket:process.env.REACT_APP_storageBucket,
    // messagingSenderId:process.env.REACT_APP_messagingSenderId,
    // appId:process.env.REACT_APP_appId,

    apiKey: "AIzaSyAYAW_w-C-oHcfOkflq2lhPtFdBbJbGhqk",
    authDomain: "health-care-support-3af87.firebaseapp.com",
    projectId: "health-care-support-3af87",
    storageBucket: "health-care-support-3af87.appspot.com",
    messagingSenderId: "509189110984",
    appId: "1:509189110984:web:6a81c070d466b8762339fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;