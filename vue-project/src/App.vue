<script setup lang="ts">
import { useRoute } from 'vue-router';
import './assets/css/style.css';
import Footer from './views/layouts/Footer.vue';
import Navbar from './views/layouts/Navbar.vue';
import Sidebar from './views/layouts/Sidebar.vue';
const route = useRoute();
</script>

<template >
  <router-view v-if="route.meta.noLayout" />

  <div class="main" v-else>
    <Sidebar />
    <Navbar />
    <main class="content">
      <router-view />
      <Footer />
    </main>
  </div>

</template>
