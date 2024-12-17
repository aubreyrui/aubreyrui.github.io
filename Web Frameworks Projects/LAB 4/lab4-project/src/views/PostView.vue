<template>
    <div v-for="postloop in apiResponse">
        <ul v-if="postloop.id == postID">
            <li>{{ 'User ID: ' + postloop.userId }}</li>
            <li>{{ 'ID: ' + postloop.id }}</li>
            <li>{{ 'Title: ' + postloop.title }}</li>
            <li>{{ 'Complete Status: ' + postloop.complete }}</li>
        </ul>
    </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';

const route = useRoute()
const postID = route.params.id
const apiResponse = ref(null)

onMounted(() => {
   axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
    console.log(res)
    apiResponse.value = res.data
  }).catch(err => {
    console.log(err)
  })
  console.warn("route", route.params)
})

</script>

<style scoped>
</style>