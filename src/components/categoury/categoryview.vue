<template>
  <v-container color="white">
<h3 class="header">OUR CATEGORY</h3>
    <v-row no-gutters>
      <v-col cols="4" v-for="cat in categoris" :key="cat.id">
        <categoury-cart :category="cat"></categoury-cart>
      </v-col >
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
 props:['categoris']
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
