<template>
  <v-container>

    <v-card class="mx-auto cart" max-width="400">
      <v-img class="img" height="300px" :src=getulr(this.category.imageUrl)>
      </v-img>
      <v-card-text class="text--primary">
        <div class="name">{{this.category.categoryName}}</div>

        <div class="description">{{this.category.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn text  class="edit btn" :to="{ name: 'editCategory', params: { id: category.id } }" v-show="$route.name=='adminCategoris'">
         ویرایش
        </v-btn>

        <v-btn class="pro btn" text :to="{ name: 'productsCategories', params: { id: category.id } }">
          محصولات
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>
  
<script>



export default {
  name: 'CategouryCart',

  data: () => ({
    name: '',
    src: '',
    description: ''
  }),
  methods: {
    getulr(pathe) {
      console.log(pathe)
      return require(`../assets/img/${pathe}`)
    }
  },
  props: ['category']
}
</script>
<style scoped lang="scss">
.form {
  @include displayflex;

}

.cart {
background-color:rgba(255, 255, 255, 0.627) ;
  .pro{
      color:$Yellow;

     } .edit{
      color:$Brutal-Blue
    } 
    .img {
    @extend %fullsize;
    object-fit: cover; 
   
  }.name{
    font-size: 20px;
    font-weight: bold;
    padding: 1rem 0;

  }
}
</style>
  