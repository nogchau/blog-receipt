import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsou9T-lfSdz5yL1OmraDJQr-lHGC8MqM",
  authDomain: "react-js-blog-806ee.firebaseapp.com",
  projectId: "react-js-blog-806ee",
  storageBucket: "react-js-blog-806ee.firebasestorage.app",
  messagingSenderId: "384095373270",
  appId: "1:384095373270:web:c2bc8a1769ec5b77598677"
};

const app = initializeApp(firebaseConfig);

//Google Auth
const provider = new GoogleAuthProvider();

const auth = getAuth();

export const authWithGoogle = async () => {

    let user = null;

    await signInWithPopup(auth, provider)
    .then((result) => {
        user = result.user
    })
    .catch((err) => {
        console.log(err);
    })

    return user;

}