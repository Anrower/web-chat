/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAas8OAj1Z-GFpckNizRYzK7HzD3aSnOoc",
  authDomain: "frienlychat-bfebe.firebaseapp.com",
  projectId: "frienlychat-bfebe",
  storageBucket: "frienlychat-bfebe.appspot.com",
  messagingSenderId: "611441972737",
  appId: "1:611441972737:web:89df6cfc01ceef5df45200"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
