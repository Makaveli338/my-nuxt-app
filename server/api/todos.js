import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc } from 'firebase/firestore';

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
const db = getFirestore(app);

export default defineEventHandler(async (event) => {
  const method = event.req.method;

  if (method === 'GET') {
    const querySnapshot = await getDocs(collection(db, 'todos'));
    const todos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    
    return todos;
  }

  if (method === 'POST') {
    const body = await useBody(event);
    const docRef = await addDoc(collection(db, 'todos'), {
      text: body.text,
      completed: false,
      createdAt: new Date()
    });

    return { id: docRef.id, text: body.text, completed: false, createdAt: new Date() };
  }

  if (method === 'DELETE') {
    const id = event.context.params.id;
    await deleteDoc(doc(db, 'todos', id));
    return { id };
  }
});