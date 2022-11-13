<template>
    <v-container class="form" height="100vh">
  
  
      <v-form class="item" v-if="category">
        <v-container>
  
          <v-text-field solo class="mt-30" clearable v-model="category.categoryName" label="name" required>
          </v-text-field>
  
          <v-text-field solo class="mt-30" clearable v-model="category.imageUrl" label="image Source" required>
          </v-text-field>
  
  
          <v-textarea class="mt-30" solo clearable v-model="category.description" label="description" ></v-textarea>
          <v-btn @click="editCat" color="#ffc800" class="btn">
            edit
          </v-btn>
  
  
        </v-container>
      </v-form>
  
  
    </v-container>
  
  
  
  
  
  
  
  </template>
  
  <script>
  
  
import Swal  from 'sweetalert2'
  import api from '../../services/API'
  export default {
    name: 'editCategory',
  
    data: () => ({
      id: null,
      category: null,
    
    }),props:['categoris'],
    methods: {
  
  
  
  async  editCat() {
      
        delete this.category["products"]
        console.log(this.category);
       
         let result = await api().post(`/category/update/${this.id}` ,this.category)
  
       if (result.status==200||result.status==201) {
      this.$emit('fetchData');
      this.$router.push({name:"Categoris"})
         new Swal({
            text: 'دسته بندی اصلاح شد',
            icon: 'success'
  
          })
        }
        else {
         new Swal({
            text: 'دسته بندی اضافه نشد',
            icon: 'error'
  
          })
        }
  
  
      }
    },
    mounted(){
     this.id=this.$route.params.id;
     this.category=this.categoris.find(cat=> cat.id == this.id);
     console.log(this.category)
    }
  }
  </script>
  <style scoped lang="scss">
  .form {
    @include displayflex;
    height: 100vh;
  
    .item {
      width: 40vw;
    }
  }
  </style>
  