<template>

  <v-app id="app">
    <navbar></navbar>
    <router-view class="view" :categoris="categories" :products='products' @editCategory="GetCategoury"></router-view>
  <footerPage></footerPage>
  </v-app>
</template>
<script>
import {mapState,  mapActions } from 'vuex'
import navbar from './components/material/navbar.vue'
import footerPage from './components/material/footer.vue'
export default {

  data() {
    return {
      
    }
  },
  components: { navbar,footerPage},
  methods: {

    ...mapActions(["GetCategoury", "GetProduct"]),
 
  
  },
  computed: {
      ...mapState(['categories', 'products']),
  },
  mounted() {

    this.GetCategoury();
    this.GetProduct();
   


  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
}
.view{
  min-height: 60vh;;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
