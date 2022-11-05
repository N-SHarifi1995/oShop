<template>
  <div class="items">
    <v-card class="card mt-2" v-for="item in products" :key="item.id">
      <v-row no-gutters>
        <v-col cols="3">
          <v-img :src="item.product.imageURL" class="img"></v-img>
        </v-col>
        <v-col cols="9" class="d-flex flex-column align-end">
          <h3>
            {{ item.product.name }}
          </h3>
          <p> {{ item.product.description }} :<strong>توضیحات </strong></p>
          <p><strong>قیمت : </strong>{{ item.product.price }}</p>
          <p><strong>تعداد : </strong>{{ item.quantity }}</p>
          <div>
            <v-btn icon @click="deletitem(item.id)">
              <v-icon>mdi-delete</v-icon>
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
        <p><strong>جمع کل: </strong>{{ totalCost }}</p>
        <v-btn>ثبت نهایی</v-btn>
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
    }

  }, mounted() {
    this.token = JSON.parse(localStorage.getItem('token')) ;
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
    background-color: transparent;
    padding: 1rem 3.5rem;

    .img {
      max-width: 9rem;
      max-height: 9rem;
    }
  }
}
</style>