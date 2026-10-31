<script setup lang="ts">
import PageHead from '@/components/PageHead.vue';
import { useCounterState } from '@/store/count';
import { ref } from 'vue';
const counter = useCounterState();
const id = ref(counter.id);
function updateId() {
  counter.setId(id.value);
}
</script>

<template>
  <PageHead title="Update ID" />
  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <h5>Current ID: {{ counter.id }}</h5>
        <button class="btn-solid theme-primary mt-4" @click="counter.random">Update ID</button>
        <form @submit.prevent="updateId">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Enter a new ID" v-model="id">
            <button class="btn-outline theme-accent input-group-btn" type="submit">Apply</button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>