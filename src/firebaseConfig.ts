// firebaseConfig.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyDGjFIfDOrnM9KQ8UyLkwu6l8mvhBHgYks',
    authDomain: 'food-app-8bcee.firebaseapp.com',
    projectId: 'food-app-8bcee',
    storageBucket: 'food-app-8bcee.appspot.com',
    messagingSenderId: '728096494580',
    appId: '1:728096494580:web:3b14e1a4eac1bdeb47dfa1',
    measurementId: 'G-C2SDM1Z34K',
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);