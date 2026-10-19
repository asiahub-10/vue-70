<script lang="ts">
import HelloWorld from './components/HelloWorld.vue';

export default {
  components: {
    HelloWorld
  },
  data() {
    return {
      name: "Mina",
      age: 12
    }
  },
  methods: {
    test: function () {
      alert("hi");
    },
    test2: () => {
      alert("hi 2");
    }
  }
}
</script>

<template>
  <h1>Hello Round 70</h1>
  <HelloWorld />
  <p>Name: {{ name }}</p>
  <p>Age: {{ age * 10 }}</p>
  <button @click="test2">Test</button>
</template>

<style scoped>
h1 {
  color: rgb(4, 119, 119);
}
</style>