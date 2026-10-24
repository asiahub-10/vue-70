<script setup lang="ts">
import Child from './Child.vue';

</script>

<template>
    <h2>Parent Component</h2>
    <h5>Child Info:</h5>
    <Child :roll="10" :active="true">
        <h5>Child Image</h5>
        <img src="https://i.pravatar.cc/80?img=30" width="80" />
    </Child>
    <Child name="Raju" :roll="5" :active="false" />
</template>