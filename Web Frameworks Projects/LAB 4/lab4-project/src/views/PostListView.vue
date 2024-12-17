<template>
    <ol type="1">
        <li v-for="postloop in apiResponse":key="postloop.id"><a href="#" v-on:click="clickedLink(postloop.id)">{{ postloop.title }}</a></li>
    </ol>
</template>

<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const apiResponse = ref(null)
const router = useRouter()
const pointer = ref(null)

onMounted(() => {
   axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
    console.log(res)
    apiResponse.value = res.data
  }).catch(err => {
    console.log(err)
  })
})

function clickedLink(id) {
    router.push({ name: 'post', params: { id: id } })
}
</script>

<style scoped>
</style>