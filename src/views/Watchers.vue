<script setup>
import { ref, watch } from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
  )
  todoData.value = await res.json()
}

fetchData()

watch(todoId, fetchData)
</script>

<template>
  <div class="center-container">
    <div class="content">
      <p>Todo id: {{ todoId }}</p>
      <button @click="todoId++" :disabled="!todoData">Fetch next todo</button>
      <p v-if="!todoData">Loading...</p>
      <pre v-else>{{ todoData }}</pre>
    </div>
  </div>
</template>

<style scoped>
.center-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  ;
}

.content {
  text-align: center;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
</style>
