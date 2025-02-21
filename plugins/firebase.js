import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

export default defineNuxtPlugin(() => {
  const firebaseConfig = {
    apiKey: "AIzaSyDTbLZTdMPftm7kVvc2XxzyldGUEK1IaNs",
    authDomain: "my-firebase-project-6bcd2.firebaseapp.com",
    projectId: "my-firebase-project-6bcd2",
    storageBucket: "my-firebase-project-6bcd2.firebasestorage.app",
    messagingSenderId: "25014099018",
    appId: "1:25014099018:web:7e3e7e0a48805cf142dab3",
    measurementId: "G-C26MZ5C3Y5"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  // const todosCollection = db.collection('todos');

  return {
    provide: {
      auth,
      db
    }
  };
});