<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
console.log('👋 This message is being logged by "App.vue", included via Vite');
import { ref } from 'vue';
const count = ref(0);
</script>

<template>
    <h1>💖 Hello World!</h1>
    <p>经典的 Vue 程序</p>
    <button @click="count++">{{ count }} ++</button>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
