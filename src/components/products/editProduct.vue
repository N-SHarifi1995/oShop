<template>

  <v-container class="form" height="100vh">
    <h1 class="header py-8">ویرایش محصول</h1>

    <v-form class="item" v-if="product">
      <v-container>
        <v-select v-model="product.categoryId" :items="categoris" label="categoris" item-text="categoryName"
          item-value="id" solo dense></v-select>
        <v-text-field solo class="mt-30" clearable v-model="product.name" label="name" required>
        </v-text-field>

        <v-text-field solo class="mt-30" clearable v-model="product.imageURL" label="image Source" required>
        </v-text-field>
        <v-text-field solo class="mt-30" clearable v-model="product.price" label="price" required>
        </v-text-field>


        <v-textarea class="mt-30" solo clearable v-model="product.description" label="description"></v-textarea>
        <v-btn class="btn"  color="#ffc800" @click="editPro">
         ویرایش
        </v-btn>


      </v-container>
    </v-form>


  </v-container>







</template>
  
<script>


import Swal from 'sweetalert2'
import api from '../../services/API'
export default {
  name: 'editProduct',

  data: () => ({
    id: null,
    category: null,
    product: null

  }), props: ['categoris', 'products'],
  methods: {


    async editPro() {
      let result = await api().post(`/product/update/${this.id}`, this.product)

      if (result.status == 200 || result.status == 201) {
        this.$emit('fetchData');
        this.$router.push({ name: "products" })
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
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(pro => pro.id == this.id);
    console.log(this.product)
  }
}
</script>
<style scoped lang="scss">
.form {
  @include displayflex;
  flex-direction: column;
  height: 100vh;

  .item {
    width: 40vw;
  }
}
</style>
  