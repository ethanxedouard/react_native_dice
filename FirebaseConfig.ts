// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBrZsgQwM38kQFmD3nyZRT0CoEbivXIyGk",
  authDomain: "pixel-dice.firebaseapp.com",
  projectId: "pixel-dice",
  storageBucket: "pixel-dice.firebasestorage.app",
  messagingSenderId: "1061104142295",
  appId: "1:1061104142295:web:71f95b8706c85c39202d92",
  measurementId: "G-VXEX1TEBW8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
