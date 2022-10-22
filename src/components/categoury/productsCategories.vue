<template>
  <v-container color="white" class="pt-10">
<h3 class="header">{{category.categoryName}}</h3>
    <v-row no-gutters>
      <v-col cols="4" v-for="pro in category.products" :key="pro.id">
       <productCart :product="pro"></productCart>
      </v-col >
    </v-row>
  </v-container>
</template>

<script>


import productCart from '../productCart.vue' 
//import {mapState, mapActions} from 'vuex'
export default {
  name: 'productsCategories',

  data: () => ({
   id:'' ,
   category:' '
  })
  , components: { productCart },
 props:['categoris'],
 mounted(){
this.id=this.$route.params.id;
this.category=this.categoris.find(cat=>cat.id==this.id);
console.log(this.category)

 }
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
