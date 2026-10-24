<script setup lang="ts">
import { reactive } from 'vue';
import { defaultStudent } from '../interfaces/Student';

const  stu = reactive(defaultStudent);

function handleSubmit() {
    console.log(stu);
}
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <h3>Registration Form</h3>
        <label for="">ID:</label>
        <input type="number" placeholder="ID" v-model="stu.id">
        <br>
        <label for="">Name:</label>
        <input type="text" placeholder="Name" v-model="stu.name">
        <br>
        <label for="">Email:</label>
        <input type="email" placeholder="Email" v-model="stu.email">
        <br>        
        <div>
            <input type="checkbox" id="active" v-model="stu.active"> <label for="active">Is Active</label>
        </div>
        <br>
        <input type="submit" value="Submit">
    </form>
</template>

<style scoped>
form {
    width: 250px;
    margin: 0 auto !important;
}
input{
    width: 100%;
    margin-bottom: 15px;
    padding: 10px 20px;
    background-color: transparent;
    box-sizing: border-box;
}
input[type="submit"]{
    background-color: rgb(4, 119, 119);
    color: white;
    border-radius: 5px;
    width: 100px;
}
input[type="checkbox"]{
    display: inline-block;
    width: auto;
}
div{
    text-align: left;
    display: flex;
    gap: 5px;
    align-items: center;
}
div > input{
    margin: 0;
}
label{
    display: block;
    text-align: left;
}
</style>