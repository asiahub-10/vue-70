<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

const name = 'John Doe';
const age = 30;
const count = ref(0);
function test() {
  alert('hi');
}
</script>

<template>
  <h1>Hello Round 70</h1>
  <HelloWorld />
  <p>Name: {{ name }}</p>
  <p>Age: {{ age * 10 }}</p>
  <button @click="test">Test</button>
  <div>
    <button @click="count--">-</button>
    <span> {{ count }} </span>
    <button @click="count++">+</button>
  </div>
</template>

<style scoped>
h1 {
  color: rgb(4, 119, 119);
}
</style>