<template>
  <v-container color="white">
    <h3 class="header">محصولات</h3>
    <v-row no-gutters>
      <v-col cols="4" v-for="pro in products" :key="pro.id">
        <Product-cart :product="pro"></Product-cart>
      </v-col>
    </v-row>

  </v-container>
</template>
  
<script>

import Swal from 'sweetalert2';
import api from '../../services/API'
import ProductCart from '../productCart.vue'
export default {
  name: 'favoritPro',

  data: () => ({
    token: '',
    products:[]
  })
  , mounted() {
    this.token = JSON.parse(window.localStorage.token);
    console.log(this.token);
    this.fetchpro()
  }, methods: {
    async fetchpro() {
     
      try {
        let res = await api().get(`/wishlist/${this.token}`)
       return this.products=res.data
      } catch (error) {
       new Swal({
        text:'خطایی رخ داده است',
        icon:'error'
       })
      }

    }
  }
  , components: { ProductCart },

}
</script>
<style scoped lang="scss">
.cartbox {
  @include displayflex;

}

.header {
  padding: 2rem;
  font-size: 2rem;
  color: $secondary-color;
}
</style>
  