<template>
  <v-container class="form" height="100vh">


    <v-form class="item" app>
      <v-container>
        <v-select v-model="categouryId" :items="categoris" label="دسته بندی" item-text="categoryName" item-value="id"
          solo dense></v-select>
        <v-text-field solo class="mt-30" clearable v-model="name" label="نام محصول " required>
        </v-text-field>

        <v-text-field solo class="mt-30" clearable v-model="src" label="تصویر" required>
        </v-text-field>


        <v-textarea class="mt-30" solo clearable v-model="description" label="توضیحات"></v-textarea>
        <v-btn @click="AddPro" class="btn"  color="#ffc800">
          افزودن
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
          this.$router.push({name:'adminproducts'})
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
