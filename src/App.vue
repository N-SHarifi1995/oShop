<template>

  <v-app id="app">
    <navbar :quantity="count " @resetCounter="resetCounter"></navbar>
    <router-view class="view " :categoris="categories" :products='products' @fetchData="fetchData()"></router-view>
    <footerPage></footerPage>
  </v-app>
</template>
<script>
import { mapState, mapActions } from 'vuex'
import api from './services/API'
import navbar from './components/material/navbar.vue'
import footerPage from './components/material/footer.vue'
export default {

  
  data() {
    return {
      token: '',
      count:''
    }
  },
  components: { navbar, footerPage },
  methods: {

    ...mapActions(["GetCategoury", "GetProduct"]),
   async fetchData() {
      this.GetCategoury();
      this.GetProduct();
      if (this.token) {
        let res =await api().get(`/cart/?token=${this.token}`)
        if (res.status == 200 || res.status == 201) {
        
          
          this.count = Object.keys(res.data.cartItems).length;
        }
        else {
          alert('error')
        }
      }


    },
    resetCounter(){
      this.count=0
    }


  },
  computed: {
    ...mapState(['categories', 'products']),
  },
  mounted() {
    this.token =this.$store.state.token
    this.fetchData()



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

.view {
  min-height: 60vh;
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
