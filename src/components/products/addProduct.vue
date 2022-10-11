<template>
  <v-container class="form" height="100vh">


    <v-form class="item" app>
      <v-container>
        <v-select v-model="categouryId" :items="categoris" label="categoris" item-text="categoryName" item-value="id"
          outlined dense></v-select>
        <v-text-field outlined class="mt-30" clearable v-model="name" label="name" required>
        </v-text-field>

        <v-text-field outlined class="mt-30" clearable v-model="src" label="image Source" required>
        </v-text-field>


        <v-textarea class="mt-30" outlined clearable v-model="description" label="description"></v-textarea>
        <v-btn @click="AddPro">
          ADD
        </v-btn>


      </v-container>
    </v-form>


  </v-container>


</template>

<script>


import Swal from 'sweetalert2'
import Api from '../../services/API'

export default {
  name: 'addProduct',

  data: () => ({
    name: '',
    src: '',
    categouryId: '',
    description: '',
    select: ''

  }),
  props: ['categoris'],
  methods: {

    async AddPro() {
      const newProduct = {
        name: this.name,
        description: this.description,
        imageURL: this.src,
        categoryId: this.categouryId
      }
      try {
        let result = await Api().post('/product/add', newProduct);
        if (result.status == 200 || result.status == 201) {
          console.log(result.data)
        new  Swal({
            text: 'محصول اضافه شد',
            icon: 'success'

          })
          this.$router.push({name:'products'})
        }

      } catch (error) {

       new Swal({
          text: 'محصول اضافه نشد',
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
