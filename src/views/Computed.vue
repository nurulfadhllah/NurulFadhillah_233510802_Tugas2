<script setup>
import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: true },
  { id: id++, text: 'Learn JavaScript', done: true },
  { id: id++, text: 'Learn Vue', done: false }
])

const filteredTodos = computed(() => {
  return hideCompleted.value
    ? todos.value.filter((t) => !t.done)
    : todos.value
})

function addTodo() {
  todos.value.push({ id: id++, text: newTodo.value, done: false })
  newTodo.value = ''
}

function removeTodo(todo) {
  todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
  <div class="container">
    <div class="todo-box">
      <form @submit.prevent="addTodo">
        <input v-model="newTodo" required placeholder="New todo" />
        <button>Add Todo</button>
      </form>

      <ul>
        <li v-for="todo in filteredTodos" :key="todo.id">
          <input type="checkbox" v-model="todo.done" />
          <span :class="{ done: todo.done }">{{ todo.text }}</span>
          <button @click="removeTodo(todo)">X</button>
        </li>
      </ul>

      <button @click="hideCompleted = !hideCompleted">
        {{ hideCompleted ? 'Show all' : 'Hide completed' }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f0f0f0;
}



form {
  margin-bottom: 1rem;
}

input[type="text"] {
  padding: 0.5rem;
  width: 70%;
  margin-right: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
  text-align: left;
}

li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0;
}

.done {
  text-decoration: line-through;
}

button {
  margin-top: 1rem;
  padding: 0.4rem 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: #652937;
  color: white;
  cursor: pointer;
}

button:hover {
  background-color:#8a3b50;
}
</style>
