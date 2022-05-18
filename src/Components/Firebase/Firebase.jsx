import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBOzoliYPAymwuhiNxHdg0VWMKAICARqKc",
    authDomain: "to-do-app-003.firebaseapp.com",
    projectId: "to-do-app-003",
    storageBucket: "to-do-app-003.appspot.com",
    messagingSenderId: "191444433762",
    appId: "1:191444433762:web:d6b2180461906cab7c8a3b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth