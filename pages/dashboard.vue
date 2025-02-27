<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { getAuth, signOut } from 'firebase/auth';
import { useRouter } from 'vue-router';
import { useNuxtApp } from '#app';
import { useTodoStore } from '@/stores/todoStore';
import { collection, addDoc, getDocs, deleteDoc, doc, Firestore } from 'firebase/firestore';

const { $db } = useNuxtApp();
const db = $db as Firestore; // Explicitly define the type of $db as Firestore
const auth = getAuth();
const router = useRouter();
const userName = ref('');
const newTodo = ref('');
const todos = ref<{ id: string; text: string; completed: boolean; createdAt: Date }[]>([]);
const todoStore = useTodoStore();
const todoCount = computed(() => todos.value.length);

onMounted(() => {
  // Retrieve the user's display name from Firebase Auth
  const user = auth.currentUser;
  if (user) {
    userName.value = user.displayName || 'User'; // Set the user's display name or a default value
  }
  todoStore.fetchTodos();
});

function signOutUser() {
  signOut(auth)
    .then(() => {
      router.replace('/');
    })
    .catch((error) => {
      console.error('Error signing out:', error);
    });
}
async function addTodo() {
  if (newTodo.value.trim() === '') {
    return;
  }
  await todoStore.addTodo(newTodo.value);
  newTodo.value = '';
}

async function deleteTodo(id: string) {
  await todoStore.deleteTodo(id);
}


</script>

<template>
  <div class="mx-auto">
    <div class="px-[48px] flex flex-col md:flex-row md:items-center justify-between flex-1 mt-7">
      <img src="/img/logo.svg" class="max-w-[270px]" />
      <div class="justify-end flex gap-3">
        <h1 class="text-lg font-semibold">Welcome,<br> {{ userName }}</h1>
      <button @click="signOutUser" class="btn-primary ">Sign out</button>
    </div>
    </div>
  </div>
  <div class="flex flex-col gap-4 items-center justify-center max-w-3xl mx-auto">
    <h1 class="text-3xl md:text-4xl font-semibold lg:text-6xl text-center leading-10 lg:leading-[74px] bg-gradient-to-b from-[#D6B6FE] to-[#6F11E4] text-transparent bg-clip-text">
      Welcome to the eCitizen Dashboard<br />
      You are now logged in!
    </h1>
    <div class="mt-4 border border-[#E1E4EA] rounded-[10px] w-2/4 p-4 mx-auto text-sm font-medium items-center">
      <div class="grid items-center justify-center gap-4">
         <h3>Total Todos: {{ todoCount }}</h3>
         <form>
          <label>
            New Todo:
            <input class="border h-7" v-model="newTodo" type="text" />
          </label>
          <button type="submit" class="btn-primary mt-4 mx-auto ">Add Todo</button>
        </form>
      </div>
      <ul>
        <li v-for="todo in todoStore.todos" :key="todo.id">
          {{ todo.text }}
          <button @click="deleteTodo(todo.id)" class=" bg-red-700  text-white font-medium rounded-full cursor-pointer items-center mx-auto mt-4">Delete Todo</button>
        </li> 
      </ul>
    </div>
  </div>
</template>