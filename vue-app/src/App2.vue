<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  },
  setup() {
    return {      
      name: 'John Doe',
      age: 30,
      test() {
        alert('hi');
      }
    }
  }
}
</script>

<template>
  <h1>Hello Round 70</h1>
  <HelloWorld />
  <p>Name: {{ name }}</p>
  <p>Age: {{ age * 10 }}</p>
  <button @click="test">Test</button>
</template>

<style scoped>
h1 {
  color: rgb(4, 119, 119);
}
</style>