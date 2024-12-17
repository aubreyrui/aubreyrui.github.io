<template>
    <h1>{{ selectedCategory }}</h1>
    <div v-for="(product, i) in apiResponse":key="i">
      <ul v-if="product.category == selectedCategory">
      <li>
        <p>{{ product.title }}</p>
      </li>
      </ul>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import axios from 'axios'

defineOptions({ inheritAttrs: false })

const props = defineProps({
selectedCategory: {
  type: String,
  required: true
}
})

const apiResponse = ref(null)

onMounted(() => {
   axios.get('https://dummyjson.com/products').then(res => {
    console.log(res)
    apiResponse.value = res.data.products
  }).catch(err => {
  })
})

</script>