<template>
  <v-container>

    <v-card class="mx-auto cart"  max-width="400">
      <v-img  height="250px" src='../assets/img/airpod.jpg'>
      </v-img>

      <v-card-subtitle class="pb-0">
        Number {{this.product.id}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{this.product.name}}</div>

        <div>{{this.product.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn color="orange" text :to="{ name: 'productDetails', params: { id: product.id } }">
          نمایش
        </v-btn>

        <v-btn color="orange" text v-show="$route.name=='adminproducts'" :to="{ name: 'editProduct', params: { id: product.id } }">
          ویرایش
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>
  
<script>



export default {
  name: 'productCart',

  data: () => ({
    name: '',
    src: '',
    description: ''
  }),
  methods: {
    getulr(pathe){
      console.log(pathe)
      return require(`../assets/img/${pathe}`)
    }
  },
   props:['product']
}
</script>
<style scoped lang="scss">
.form {
  @include displayflex;

}.cart{
  
  img{@extend %fullsize;}
}
</style>
  