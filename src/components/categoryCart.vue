<template>
  <v-container>

    <v-card class="mx-auto cart" max-width="400">
      <!-- <v-img  height="250px" :src=getulr(this.category.imageUrl)>
      </v-img> -->

      <v-card-subtitle class="pb-0">
        Number {{this.category.id}}
      </v-card-subtitle>

      <v-card-text class="text--primary">
        <div>{{this.category.categoryName}}</div>

        <div>{{this.category.description}}</div>
      </v-card-text>

      <v-card-actions>
        <v-btn text :to="{ name: 'editCategory', params: { id: category.id } }" v-show="$route.name=='adminCategoris'">
          edit
        </v-btn>

        <v-btn color="orange" text :to="{ name: 'productsCategories', params: { id: category.id } }">
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

  img {
    @extend %fullsize;
  }
}
</style>
  