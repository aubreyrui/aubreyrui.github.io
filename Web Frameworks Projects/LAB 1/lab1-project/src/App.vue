<template>
  <form v-on:submit.prevent="printJSON">
    <p>Info Form</p>
    <p>Email: <input type="email" v-model="email"></p>
    <p>First Name: <input type="text" v-model="first_name"></p>
    <p>Last Name: <input type="text" v-model="last_name"></p>
    <p>Phone Number (09XX-XXX-XXXX): <input type="text" v-model="phone_number"></p>
    <button type="submit">Submit</button>
  </form>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
          email: "",
          first_name: "",
          last_name: "",
          phone_number: ""
        }
      },
      methods: {
        printJSON() {
          var details = {
            email: this.email,
            first_name: this.first_name,
            last_name: this.last_name,
            phone_number: this.phone_number
          }
          console.log(JSON.stringify(details, null, 2))
        } 
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
</style>