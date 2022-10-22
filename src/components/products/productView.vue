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
  
  
  import ProductCart from '../productCart.vue'
  export default {
    name: 'CategoryVeiw',
  
    data: () => ({
      
    })
    , components: { ProductCart },
   props:['products']
  }
  </script>
  <style scoped lang="scss">
  .cartbox {
    @include displayflex;
  
  }
  .header{
    padding: 2rem;
    font-size: 2rem;color: $secondary-color;
  }
  </style>
  