// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore';

const {initializeAppCheck, ReCaptchaV3Provider} = require("firebase/app-check");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBkhCtNPxBQwVVCZqNp1W6_WHFar5xEMZY",
    authDomain: "kafejkadlapawla.firebaseapp.com",
    projectId: "kafejkadlapawla",
    storageBucket: "kafejkadlapawla.appspot.com",
    messagingSenderId: "619754848647",
    appId: "1:619754848647:web:f1d0ad03befb5829e01322",
    measurementId: "G-VR4V5S4ZXR"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);