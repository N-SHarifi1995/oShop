<template>
  <v-container color="white">
<h3 class="header">OUR CATEGORY</h3>
    <v-row>
      <v-col cols="4" v-for="cat in categories" :key="cat.id">
        <categoury-cart :category="cat"></categoury-cart>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>

// import Swal from 'sweetalert2'
// import api from '../../services/API'
import CategouryCart from '../categoryCart.vue' 
import {mapState, mapActions} from 'vuex'
export default {
  name: 'CategoryVeiw',

  data: () => ({
    
  })
  , components: { CategouryCart },
  methods: {
    // async GetCategoury() {

    //   try {
    //     let res = await api().get('/category/');
    //     let result = res.data;

    //     if (res.status == 200) {

    //       result = result.filter(j => typeof j.categoryName == 'string')
    //       let resultt = result.filter(i => i.categoryName.includes('La'))
    //       this.categories = resultt

    //     }
    //   } catch (error) {

    //     new Swal({
    //       text: "There are some problems`",
    //       icon: 'error'

    //     })
    //   }


    // },
 ...mapActions(["GetCategoury"])
  },
computed:{
  ...mapState(['categories'])
},
  mounted() {
    //this.$store.dispatch('GetCategoury')
    
    this.GetCategoury()
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
