<script setup lang="ts">
import PageHead from '@/components/PageHead.vue';
import { useCounterState } from '@/store/count';
const counter = useCounterState();
</script>

<template>
  <PageHead title="Count" />

  <section class="section-gap">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-center align-items-center gap-4 mb-4">
          <button class="btn-outline theme-danger" @click="counter.decrement">-</button>
          <h5>Count: {{ counter.count }}</h5>
          <button class="btn-outline theme-success" @click="counter.increment">+</button>
        </div>
        <ul>
          <li>Double: {{ counter.double }}</li>
          <li>Triple: {{ counter.triple }}</li>
          <li>Square: {{ counter.square }}</li>
        </ul>
        <button class="btn-solid theme-dark mt-4" @click="counter.reset">Reset</button>
      </div>
    </div>
  </section>
</template>