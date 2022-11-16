<template>
  <div class="items">
    <v-card class="card mt-2 " v-for="item in products" :key="item.id">
      <v-row no-gutters>
        <v-col  class="col-sm-4 col-md-3 col-xs-12">
          <v-img :src=getulr(item.product.imageURL) class="img"></v-img>
        </v-col>
        <v-col  class=" col-sm-8 col-md-9 col-xs-12 d-flex flex-column align-end">
          <div class="d-flex title ">
            <p class="pl-4 name
            "> {{ item.product.name }} </p>

          </div>
          <div class="d-flex flex-column title text-justify">
            <p class="text-right lable"> &nbsp;&nbsp;&nbsp;: توضیحات</p>
            <p class="pl-4 desc    text-right text-justify-right"> {{ item.product.description }} </p>

          </div>
          <div class="d-flex  title text-justify">
            <p class="pl-4 desc    text-right text-justify-right"> {{ item.quantity }} </p>
            <p class="text-right lable"> &nbsp;&nbsp;&nbsp;: تعداد</p>


          </div>
          <div class="d-flex title">
            <p class="pl-4 desc "> {{ item.product.price }} </p>
            <p class="lable"> &nbsp;&nbsp;&nbsp;: قیمت </p>
          </div>

          <div>
            <v-btn icon @click="deletitem(item.id)">
              <v-icon color="#9a5f1f">mdi-delete</v-icon>
            </v-btn>
            <v-btn icon>
              <v-icon>mdi-edit</v-icon>
            </v-btn>
          </div>

        </v-col>
      </v-row>
    </v-card>
    <v-row no-gutters>
      <v-col clos="12">
       
        <div class="d-flex justify-center align-center total" > 
           <p  class=""> &nbsp;&nbsp;&nbsp; جمع کل:</p>
         
            <p class="pl-4 desc "> {{ totalCost }} </p>
           </div>
        <v-btn class="btn mb-8" color="#ffc800">ثبت نهایی</v-btn>
      </v-col>

    </v-row>
  </div>
</template>
<script>
import api from '../services/API'
export default {
  name: 'cartPage',
  data() {
    return {
      products: [],
      token: null,
      totalCost: ''
    }
  },
  methods: {
    async getOrder() {
      let res = await api().get(`/cart/?token=${this.token}`)

      if (res.status == 200 || res.status == 201) {

        this.products = res.data.cartItems
        this.totalCost = res.data.totalCost
      }
      else {
        alert('error')
      }
    },
    async deletitem(itemId) {
      let res = await api().delete(`cart/delete/${itemId}/?token=${this.token}`)
      if (res.status == 200 || res.status == 201) {
        console.log(res.data)
        this.$emit('fetchData')
      }
      else {
        alert('error')
      }
      this.$router.go(0)
    },
    getulr(pathe) {
      console.log(pathe)
      return require(`@/assets/img/${pathe}`)
    }

  }, mounted() {
    this.token = JSON.parse(localStorage.getItem('token'));
    //console.log(this.token)
    this.getOrder()
  },
}
</script>
<style lang="scss" scoped>
.items {
  margin-top: 5rem;
  padding: 0 2rem;

  .card {
    background-color: rgba(255, 255, 255, 0.627);
    padding: 1rem 3.5rem;

    .img {
      max-width: 15rem;
      max-height:18rem;
    }

    
    .desc{font-size: 1rem;}
 .lable {
      font-size: 1rem;
      font-weight: 700;
      color: $Yellow;

    }
    .name {
      font-size: 1.2rem;
      font-weight: 700;
    }
  }
  .total{
   color:#ffc800;
  font-size: larger;
  }
 
}
</style>