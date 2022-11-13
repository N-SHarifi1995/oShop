<template>
  <v-container class="buttons">


    <v-btn :to="{name:'adminCategoris'}" class="mt-3 button" fab width="150" height="150" >
     دسنه بندی ها
    </v-btn>

    <v-btn :to="{name:'adminproducts'}" class="mt-3  button"  fab width="150" height="150"  >
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
   background-color: $Brutal-gold;
   color: white;
   font-weight:bolder;
 
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
  