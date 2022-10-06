<template>
  <v-container class="buttons">


    <v-btn :to="{name:'Categoris'}" class="mt-3 button" fab width="150" height="150" >
     دسنه بندی ها
    </v-btn>

    <v-btn :to="{name:'product'}" class="mt-3  button"  fab width="150" height="150"  >
     محصولات
    </v-btn>
    <v-btn class="mt-3  button" fab width="150" height="150"  >
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
   
   .button{
   background-color: $secondary-color;
   color: white;
   font-weight:bolder;
   font-family: $font-vazir;
   font-size:1rem;
   box-shadow: 2px 8px 15px rgb(68, 65, 65);
   }
 }

 .cart {

   img {
     @extend %fullsize;
   }

 }


 
</style>
  