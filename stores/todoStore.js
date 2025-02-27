import { defineStore } from 'pinia';
import { useFetch } from '#app';

export const useTodoStore = defineStore('todoStore', {
  state: () => ({
    todos: []
  }),
  actions: {
    async fetchTodos() {
      const { data } = await useFetch('/api/todos');
      this.todos = data.value;
    },
    async addTodo(task) {
      const { data } = await useFetch('/api/todos', {
        method: 'POST',
        body: { text: task }
      });
      this.todos.push(data.value);
    },
    async deleteTodo(id) {
      await useFetch(`/api/todos/${id}`, {
        method: 'DELETE'
      });
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
});