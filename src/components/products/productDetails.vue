<template>
  <v-container color="white " class="pt-16">

    <v-row no-gutters class="mt-15">
      <v-col cols="4">
        <v-img :src="product.imageURL"></v-img>
      </v-col>
      <v-col cols="8" class="d-flex align-start flex-column px-5 py-5 justify-space-around">
       <div class="d-flex title"> <strong> نام محصول:</strong><p class="pl-4"> {{product.name}}</p></div>
       <div class="d-flex title"><strong> توضیحات:</strong> <p class="pl-4"> {{product.description}}</p></div>
       <div class="d-flex title"><strong>قیمت: </strong>  <p class="pl-4"> {{product.price}}</p></div>
       <div class="d-flex title"> <strong>دسته بندی :</strong><p class="pl-4"> {{category.categoryName}}</p></div>
       
       
       
      </v-col>
    </v-row>

  </v-container>
</template>
  
<script>


export default {
  name: 'productDetails',

  data: () => ({
    product: '',
    id: '',
    category:""
  }),
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(pro => pro.id == this.id);
    this.category=this.categoris.find(cat=>cat.id==this.product.categoryId)
  },

  props: ['products','categoris']
}
</script>
<style scoped lang="scss">

// .title {
// font-family:  $font-vazir;
// font-size: 35px;
// font-weight: 500;
// }
</style>
  