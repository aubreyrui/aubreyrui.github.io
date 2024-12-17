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
const selectedProduct = ref('')

onMounted(() => {
     axios.get('https://dummyjson.com/products').then(res => {
      console.log(res)
      apiResponse.value = res.data.products
    }).catch(err => {
    })
  })


function showProduct(keyproduct) {
      selectedProduct = keyproduct;
      console.log(keyproduct)
}

    /*

export default {
  props: ['selectedCat'],
  setup() {
    return {
      selectedProduct: null,
    }
  },
  methods: {
    showProduct(keyproduct) {
      this.selectedProduct = keyproduct;
      console.log(keyproduct)
    } 
  }
}

*/

/*   mounted(){
  axios.get('https://dummyjson.com/products').then(res => {
      console.log(res)
      this.apiResponse = res.data.products
    }).catch(err => {
      console.error(err)
    })} */

</script>