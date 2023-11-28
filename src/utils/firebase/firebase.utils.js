import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlXbJboPQh34slFAO_X53STvJAcIMFm7g",
  authDomain: "crwn-clothing-db-1938a.firebaseapp.com",
  projectId: "crwn-clothing-db-1938a",
  storageBucket: "crwn-clothing-db-1938a.appspot.com",
  messagingSenderId: "612808677346",
  appId: "1:612808677346:web:0f828b2226cd1c5dc30bbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(userAuth);
};

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
