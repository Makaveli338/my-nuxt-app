import { defineStore } from 'pinia';
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { useNuxtApp } from '#app';

interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    async fetchTodos() {
      const { $db } = useNuxtApp();
      const querySnapshot = await getDocs(collection($db, 'todos'));
      this.todos = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) as Todo[];
    },
    async addTodo(task: string) {
      const { $db } = useNuxtApp();
      const docRef = await addDoc(collection($db, 'todos'), {
        text: task,
        completed: false,
        createdAt: new Date()
      });
      this.todos.push({ id: docRef.id, text: task, completed: false, createdAt: new Date() });
    },
    async deleteTodo(id: string) {
      const { $db } = useNuxtApp();
      await deleteDoc(doc($db, 'todos', id));
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
});