<template>
  <v-container class="buttons">


    <v-btn :to="{name:'Categoris'}" class="mx-2" fab width="100" height="100" outlined color="indigo">
      categouris
    </v-btn>

    <v-btn class="mx-2" fab width="100" height="100" outlined color="indigo">
      products
    </v-btn>
    <v-btn class="mx-2" fab width="100" height="100" outlined color="indigo">
      کاربران
    </v-btn>


  </v-container>
</template>
  
<script>



export default {
  name: 'adminPage',

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
.buttons {
   @include displayflex;
   flex-direction: column;
   height: 100vh;
   justify-content: space-evenly;
   font-family: $font-vazir
 }

 .cart {

   img {
     @extend %fullsize;
   }

 }


 // @font-face {
 //   font-family: 'vazir';
 //    src: url('../vazir-font-v18.0.0/Vazir-Bold.eot') ;
 //   //   url('../src/assets/vazir-font-v18.0.0/Vazir.ttf'),
 //   //   url('../src/assets/vazir-font-v18.0.0/Vazir.woff') ,
 //   //   url('../src/assets/vazir-font-v18.0.0/Vazir.woff2');

 //   font-weight: normal;
 // }
</style>
  