<script setup>
import { reactive, ref } from 'vue'

const counter = reactive({ count: 0 })
const message = ref('Hello World!')
</script>

<template>
  <div class="container">
    <div class="content">
      <h1>{{ message }}</h1>
      <p>Count is: {{ counter.count }}</p>
    </div>
  </div>
</template>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* full height of the viewport */
}

.content {
  text-align: center;
}

h1 {
  margin-bottom: 1rem;
}

p {
  margin: 0;
}
</style>
