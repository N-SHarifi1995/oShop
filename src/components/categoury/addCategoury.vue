<template>
  <v-container class="form" height="100vh">


    <v-form class="item">
      <v-container>

        <v-text-field solo  class="mt-30 "  clearable v-model="name" label="دسته بندی" required>
        </v-text-field>

        <v-text-field solo class=" texterea" clearable v-model="src" label="تصویر" required>
        </v-text-field>


        <v-textarea class="mt-30" solo clearable v-model="description" label="توضیحات"></v-textarea>
        <v-btn @click="AddCat" class="btn"  color="#ffc800">
         افزودن 
        </v-btn>


      </v-container>
    </v-form>


  </v-container>







</template>

<script>


import Swal from 'sweetalert2'

export default {
  name: 'addCategoury',

  data: () => ({
    name: '',
    src: '',
    description: '',

  }),
  methods: {



    async AddCat() {
      const newCategory = {
        categoryName: this.name,
        description: this.description,
        imageUrl: this.src,
      }
      let result = await this.$store.dispatch('AddCategory', newCategory);

      if (result.data) {
        new Swal({
          text: 'دسته بندی اضافه شد',
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
  }
}
</script>
<style scoped lang="scss">
.form {
  @include displayflex;
  height: 100vh;

  .item {
    width: 40vw;
    .texterea{
     color: blueviolet;
     border-radius: 2rem rgb(169, 13, 13) solid;
    }
  }
}
</style>
