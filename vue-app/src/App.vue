<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>

<template>
  <nav>
    <RouterLink to="/">Form</RouterLink>
    <span> | </span>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <!-- <RouterView /> -->
   <router-view />
</template>

<style scoped>
h1 {
  color: rgb(4, 119, 119);
}
</style>