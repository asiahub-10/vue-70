<script setup lang="ts">
import { ref } from 'vue';

const num = ref(10);

</script>

<template>
    <h2>Condition</h2>
    <h3>{{ num }}</h3>
    <div>
        <button @click="num--">-</button>
        <button @click="num++">+</button>
    </div>
    <div v-if="num != 0">
        <p v-if="num % 2 == 0">Number is Even</p>
        <p v-else-if="num % 2 != 0">Number is Odd</p>
    </div>
    <p v-else>Number is nither even nor odd</p>
</template>