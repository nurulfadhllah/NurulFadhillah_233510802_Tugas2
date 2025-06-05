<script setup>
import { ref } from 'vue'

const text = ref('')
</script>

<template>
  <div class="container">
    <div class="content">
      <input v-model="text" placeholder="Type here" />
      <p>{{ text }}</p>
    </div>
  </div>
</template>

