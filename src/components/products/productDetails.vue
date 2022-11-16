<template>
  <v-container color="white " class="pt-16 ">

    <v-row no-gutters class="mt-15 d-flex  flex-row-reverse">
  <v-col class="col-sm-4 col-md-4 col-xs-12">
        <v-img class="img" :src=getulr(product.imageURL)></v-img>
      </v-col>
      <v-col  class="d-flex col-sm-8 col-md-8 col-xs-12  flex-column px-5 py-5 justify-space-around align-end">
        <div class="d-flex title ">
          <p class="pl-4 " > {{ product.name }} </p>
          <p class="lable">&nbsp;&nbsp;&nbsp;: نام محصول</p>
        </div>
        <div class="d-flex flex-column title text-justify">
          <p class="text-right lable"> &nbsp;&nbsp;&nbsp;: توضیحات</p>
          <p class="pl-4    text-right text-justify-right"> {{ product.description }} </p>

        </div>
        <div class="d-flex title">
          <p class="pl-4 " > {{ product.price }} </p>
          <p class="lable"> &nbsp;&nbsp;&nbsp;: قیمت </p>
        </div>
        <div class="d-flex title">
          <p class="pl-4 " > {{ category.categoryName }} </p>
          <p class="lable">&nbsp;&nbsp;&nbsp; : دسته بندی </p>
        </div>
        <div class="d-flex title align-center justify-center">

          <v-text-field solo class="pl-4" type="number" lable="تعداد" v-model="quantity" min="1">

          </v-text-field>
          <p class="lable"> &nbsp;&nbsp;&nbsp; : تعداد </p>
        </div>
        <div>
          <v-btn fab icon color="#ff1d58" @click="wishlist(product.id)">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
          <v-btn class="btn ml-16" color="#ffc800" @click="addCart(product.id)">
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
    },
    getulr(pathe) {
      console.log(pathe)
      return require(`@/assets/img/${pathe}`)
    }
  }
}
</script>
<style scoped lang="scss">
.favorite {
  color: $Yass-Queen;
 
}

.title {
  color: aliceblue;
}
.lable{
  color:$Crown-Yellow;
  font-size: 1rem;
}
.img {
  max-height: 30rem;
  max-width: 25rem;
  padding: 0 2rem;
  object-fit: cover;
}
</style>
  