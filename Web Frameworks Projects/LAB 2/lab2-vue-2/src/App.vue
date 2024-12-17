<template>
  <div class="list-group" v-if="showItems == false">
    <h1>
    </h1> 
    <button class="list-group-item list-group-item-action" @click="updateSelected(cat.category)"  v-for="(cat, index) in cats" :key="index">{{ cat.category }}</button>
    </div>
    <div v-else>
      <button class="btn btn-primary" @click="()=> {showItems=false; selectedProduct=null;}"> Go back</button>
      <h1>{{ this.selectedCat }}</h1>
      <div v-for="(product, i) in this.apiResponse":key="i">
        <ul v-if="product.category == this.selectedCat">
        <li>
          <a href="#" @click="showProduct(product)">{{ product.title }}</a>
        </li>
        </ul>
        <br>
        <div v-if="(selectedProduct==product)">
          <h2>{{ product.title }}</h2>
          <img :src="product.images" alt="">
          <p>Description: {{ product.description }}</p> <br>
          <p>Price: {{ product.price }}</p> <br>
        </div>
      </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      showItems: false,
      cats: [
        {category: 'beauty'}, 
        {category: 'fragrances'}, 
        {category: 'furniture'}, 
        {category: 'groceries'}
      ],
      selectedCat: null,
      apiResponse: [],
      selectedProduct: null
    }
  },
  methods: {
    updateSelected (selected) {
        this.selectedCat = selected;
        this.showItems = true;
        console.log(selected);
     },
    showProduct(keyproduct) {
      this.selectedProduct = keyproduct;
      console.log(keyproduct)
    } 
  },
  mounted() {
    axios.get('https://dummyjson.com/products').then(res => {
      console.log(res)
      this.apiResponse = res.data.products
    }).catch(err => {
      console.error(err)
    })
  }
}

</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

button {
    align-items: center;
    background-color: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: .25rem;
    box-shadow: rgba(0, 0, 0, 0.02) 0 1px 3px 0;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85);
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    margin: 0;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
    position: relative;
    text-decoration: none;
    transition: all 250ms;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    vertical-align: baseline;
    width: auto;
  }

  button:hover,
  button:focus {
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
    color: rgba(0, 0, 0, 0.65);
  }

  button:hover {
    transform: translateY(-1px);
  }

  button:active {
    background-color: #F0F0F1;
    border-color: rgba(0, 0, 0, 0.15);
    box-shadow: rgba(0, 0, 0, 0.06) 0 2px 4px;
    color: rgba(0, 0, 0, 0.65);
    transform: translateY(0);
  }

</style>