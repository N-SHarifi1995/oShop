<template>
  <v-container color="white">

    <h3 class="header py-8">دسته بندی ها</h3>


    <div class="d-flex justify-end py-6 ">
      <v-btn class="btn" color="#eb942a" :to="{ name: 'AddCategoury' }">افزودن دسته بندی</v-btn>

    </div>

    <v-row no-gutters>
      <v-col  class="col-md-4 col-sm-6 col-xs-6" v-for="cat in categoris" :key="cat.id">
        <categoury-cart :category="cat"></categoury-cart>
      </v-col>
    </v-row>



  </v-container>
</template>

<script>

// import Swal from 'sweetalert2'
// import api from '../../services/API'
import CategouryCart from '../categoryCart.vue'
//import {mapState, mapActions} from 'vuex'
export default {
  name: 'CategoryVeiw',

  data: () => ({

  })
  , components: { CategouryCart },
  props: ['categoris']
}
</script>
<style scoped lang="scss">
.cartbox {
  @include displayflex;

}
.btn{
  background-color: $Blue;
}


</style>
