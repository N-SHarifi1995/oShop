<template>
  <v-container color="white " class="pt-16">

    <v-row no-gutters class="mt-15">
      <v-col cols="4">
        <v-img :src="product.imageURL"></v-img>
      </v-col>
      <v-col cols="8" class="d-flex align-start flex-column px-5 py-5 justify-space-around">
        <div class="d-flex title"> <strong> نام محصول:</strong>
          <p class="pl-4"> {{ product.name }}</p>
        </div>
        <div class="d-flex title"><strong> توضیحات:</strong>
          <p class="pl-4"> {{ product.description }}</p>
        </div>
        <div class="d-flex title"><strong>قیمت: </strong>
          <p class="pl-4"> {{ product.price }}</p>
        </div>
        <div class="d-flex title"> <strong>دسته بندی :</strong>
          <p class="pl-4"> {{ category.categoryName }}</p>
        </div>
        <div class="d-flex title align-center">
          <strong>تعداد </strong>
          <v-text-field class="pl-4" type="number" lable="تعداد" v-model="quantity" min="1">

          </v-text-field>
        </div>
        <div>
          <v-btn fab icon color="#ff1d58" @click="wishlist(product.id)">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn @click="addCart(product.id)">
            افزودن به سبد خردید
          </v-btn>
        </div>


      </v-col>
    </v-row>

  </v-container>
</template>
  

<script>

import Swal from 'sweetalert2';
import api from '../../services/API'
export default {
  name: 'productDetails',

  data: () => ({
    product: '',
    id: '',
    category: "",
    token: '',
    quantity: 1

  }),
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find(pro => pro.id == this.id);
    this.category = this.categoris.find(cat => cat.id == this.product.categoryId);
    this.token = this.$store.state.token
    // JSON.parse(window.localStorage.token);
    console.log(this.token)


  },


  props: ['products', 'categoris'],
  methods: {
    async wishlist(proid) {
      console.log(this.token)
      try {
        let reswishlist = await api().post(`/wishlist/add?token=${this.token}`, { id: proid })
        if (reswishlist.status == 200 || reswishlist.status == 201) {
          new Swal({
            text: 'به لیست موزد علاقهها افزوده شد'
          })
        }
      } catch (error) {

        new Swal({
          text: 'خطایی رخ داده است'
        })
      }


    },
    async addCart(productId) {
      if (!this.token) {
        new Swal({
          text: 'لطفا به حساب خود وارد شوید'
        })
      }
      else {
        console.log(productId)
        let res = await api().post(`/cart/add?token=${this.token}`, {
          productId: productId,
          quantity: this.quantity,
        })
        console.log(res)
        if (res.status == 200 || res.status == 201) {

          new Swal({
            text: 'به سبد افزوده شد'
          })
        }

        else {
          new Swal({
            text: 'خطایی رخ داده است'
          })
        }
      }
    }
  }
}
</script>
<style scoped lang="scss">
.favorite {
  color: $Yass-Queen
}
</style>
  