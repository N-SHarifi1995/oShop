<template>
  <v-container class="form" height="100vh">


    <v-form class="item">
      <v-container>

        <v-text-field outlined class="mt-30" clearable v-model="name" label="name" required>
        </v-text-field>

        <v-text-field outlined class="mt-30" clearable v-model="src" label="image Source" required>
        </v-text-field>


        <v-textarea class="mt-30" outlined clearable v-model="description" label="description" ></v-textarea>
        <v-btn @click="AddCat">
          ADD
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
        Swal({
          text: 'دسته بندی اضافه شد',
          icon: 'success'

        })
      }
      else {
        Swal({
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
  }
}
</style>
