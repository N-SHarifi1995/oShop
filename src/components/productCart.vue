<template>
  <v-container>

    <v-card class="mx-auto cart"  max-width="400">
      <v-img class="img" :src=getulr(this.product.imageURL)>
      </v-img>

    
      <div class="name">{{ this.product.name }}</div>
      <v-card-text>
        <div class="describtion">{{ this.product.description.substring(30) }}</div>

      </v-card-text>

      <div class="price">{{ this.product.price }}</div>
      <v-card-actions>
        <v-btn class="btn pro" text :to="{ name: 'productDetails', params: { id: product.id } }">
          نمایش
        </v-btn>

        <v-btn class="btn edit" text v-show="$route.name=='adminproducts'"
          :to="{ name: 'editProduct', params: { id: product.id } }">
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
  
  }),
  methods: {
    getulr(pathe) {
      console.log(pathe)
      return require(`../assets/img/${pathe}`)
    }
  },
  props: ['product']
}
</script>
<style scoped lang="scss">
.form {
  @include displayflex;

}

.cart {
  background-color: rgba(255, 255, 255, 0.627);
.img{max-height: 200;}
  .pro {

    color: $Yellow;

  }

  .edit {
    color: $Brutal-Blue
  }

  .name{
    font-size:1.5rem;
   
  }
  .describtion{
color: rgb(33, 33, 32);
  }
}
</style>
  