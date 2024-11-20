// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {initializeAuth, getReactNativePersistence} from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDxWG9nW77vl5j0lCEnCr5EDEkFkhir5oY',
  authDomain: 'money-tracker-9f799.firebaseapp.com',
  projectId: 'money-tracker-9f799',
  storageBucket: 'money-tracker-9f799.firebasestorage.app',
  messagingSenderId: '945548005920',
  appId: '1:945548005920:web:b3d823b683866be1e4a245',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export default app;
