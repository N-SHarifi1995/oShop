<template>
  <v-app id="app">
    <router-view :categoris="categories" :products='products'></router-view>

  </v-app>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      
    }
  },
  methods: {

    ...mapActions(["GetCategoury", "GetProduct"])
  },
  computed: {
    ...mapState(['categories','products']),

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
