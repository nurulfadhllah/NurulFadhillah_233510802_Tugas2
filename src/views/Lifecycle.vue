<script setup>
import { ref, onMounted } from 'vue'

const pElementRef = ref(null)

onMounted(() => {
  pElementRef.value.textContent = 'mounted!'
})
</script>

<template>
  <div class="container">
    <p ref="pElementRef">Hello</p>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: sans-serif;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full height of the viewport */
}

p {
  font-size: 1.5rem;
  text-align: center;
}
</style>
