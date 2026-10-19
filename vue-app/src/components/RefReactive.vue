<script setup lang="ts">
import { reactive, ref } from 'vue';

const user = ref(
  {
    name: 'John Doe',
    age: 30
  }
);
function changeName() {
  user.value.name = 'Lali';
  console.log(user.value.name);
}
const student = reactive(
  {
    name: 'Mina',
    age: 20
  }
);
function changeStuName() {
  student.name = 'Rani';
  console.log(student.name);
}
</script>

<template>
  <p>Name: {{ user.name }}</p>
  <p>Age: {{ user.age }}</p>
  <button @click="changeName">Change Name</button>
  <hr>
  <p>Student Name: {{ student.name }}</p>
  <p>Student Age: {{ student.age }}</p>
  <button @click="changeStuName">Change Name</button>
</template>

<style scoped>
h1 {
  color: rgb(4, 119, 119);
}
</style>