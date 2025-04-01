import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCvYqmQobEQ82fFswWaBHeBUEL0XRpv09E",
    authDomain: "todo-app-8c2fa.firebaseapp.com",
    projectId: "todo-app-8c2fa",
    storageBucket: "todo-app-8c2fa.firebasestorage.app",
    messagingSenderId: "60205188523",
    appId: "1:60205188523:web:abd747394a2355f5c73eee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };