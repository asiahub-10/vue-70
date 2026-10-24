<script setup lang="ts">
import Img from '@/assets/hero.png';
// import Img from '../../assets/hero.png';
const alt = "Image";

defineProps({
    name: String,
    roll: Number,
    active: Boolean
});
</script>

<template>
    <div :style="{backgroundColor: 'purple', color: 'white'}">
        <h3>Clield Component</h3>
        <img :src="Img" v-bind:alt="alt" width="100" height="200">
        <p v-if="name">Name: {{ name }}</p>
        <p v-else>Unknown Student</p>
        <p>Roll: {{ roll }}</p>
        <p>Active: {{ active }}</p>
        <slot></slot>
    </div>
</template>