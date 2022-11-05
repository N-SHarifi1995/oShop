<template>
  <div>
    <v-row no-gutters>
      <v-col cols="12">
        <v-card class="banner">
          <div class="mask"></div>
        </v-card>
      </v-col>
    </v-row>
    <!-- category part -->
    <v-card class="categoris px-5 " color="transparent">

      <p class=" text-right pt-9   part">دسته بندی ها</p>
      <v-row no-gutters>
        <v-col cols='4' class="col-sm-3 col-xs-2" v-for="inx in  categorySize" :key="inx">
          <categoryCart :category="categoris[inx - 1]"></categoryCart>


        </v-col>
      </v-row>
    </v-card>
    <!-- product part -->
    <v-card class=" px-5" color="transparent">
      <p class="text-right pt-9  part">محصولات</p>
      <v-row no-gutters>
        <v-col cols='4' class="col-sm-3 col-xs-2" v-for="inx in  productSize" :key="inx">
          <productCart :product="products[inx - 1]"></productCart>
        </v-col>
      </v-row>
    </v-card>
  </div>



</template>


  
    

<script>
// @ is an alias to /src
import categoryCart from '../components/categoryCart.vue'
import productCart from '../components/productCart.vue'
export default {
  name: 'HomeView',
  props: ['products', 'categoris'],
  components: { categoryCart, productCart },
  data() {
    return {
      categorySize: null,
      productSize: null,
    } 
  },
  mounted() { 

    this.categorySize = Math.min(6, this.categoris.length);
    this.productSize = Math.min(8, this.products.length);
  }
}
</script>
<style scoped lang="scss">
.banner {
  background-image: url(../assets/img/6.jpg );
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 90vh;
  z-index: 50;

  .mask {
    background-color: rgba(0, 0, 0, 0.57);
    width: 100%;
    height: 100%;
  }

  // .categoris{ 
  //  }
  // .cart{ba}
}

.part {
  font-size: 30px;
  font-weight: 500;
  color: $Brutal-Blue;
}
</style>
