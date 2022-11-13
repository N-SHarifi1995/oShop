<template>
  <v-container>

    <v-card class="mx-auto cart"  max-width="400">
      <v-img  class="img"  :src=getulr(this.product.imageURL)>
      </v-img>

      <v-card-subtitle class="pb-0">
        Number {{this.product.id}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{this.product.name}}</div>

        <div>{{this.product.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn  class="btn pro" text :to="{ name: 'productDetails', params: { id: product.id } }">
          نمایش
        </v-btn>

        <v-btn class="btn edit" text v-show="$route.name=='adminproducts'" :to="{ name: 'editProduct', params: { id: product.id } }">
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

}.cart{background-color:rgba(255, 255, 255, 0.627) ;
  .pro{
    
      color:$Yellow;

    } .edit{
      color:$Brutal-Blue
    } 
  .img {
   
   
   
  }
}
</style>
  