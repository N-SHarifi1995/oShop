<template>
  <v-container color="white">
    <h3 class="header">محصولات</h3>
    <div class="d-flex justify-end py-6 ">
      <v-btn class="btn" color="#eb942a" v-show="$route.name=='adminproducts'" :to="{ name: 'addProducts' }">افزودن محصول</v-btn>

    </div>
    <v-row no-gutters>
      <v-col class="col-md-4 col-sm-6 col-xs-6 " v-for="pro in products" :key="pro.id">
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
  props: ['products']
}
</script>
<style scoped lang="scss">
.cartbox {
  @include displayflex;

}
</style>
  