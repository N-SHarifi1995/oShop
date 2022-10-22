import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategoury from '../components/categoury/addCategoury'
import editCategory from '../components/categoury/editCategory'
import Categouries from '../components/categoury/categoryview'
import productsCategories from '../components/categoury/productsCategories'
import Products from '../components/products/productView'
import ProductDetails from '../components/products/productDetails'
import addProduct from '../components/products/addProduct'
import editProduct from '../components/products/editProduct'
import adminPage from '../components/adminpage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/admin/AddCategoury',
    name: 'AddCategoury',
    component: AddCategoury,

  },
  {
    path: '/admin/editCategory/:id',
    name: 'editCategory',
    params: true,
    component: editCategory,

  },
  {
    path: '/admin/Categouries',
    name: 'adminCategoris',
    component: Categouries,

  }, {
    path: '/admin',
    name: 'Admin',
    component: adminPage,

  }, {
    path: '/product/:id',
    name: 'productDetails',
    params:true,
    component: ProductDetails,

  },{
    path: '/products/:id',
    name: 'productsCategories',
    params:true,
    component: productsCategories,

  }, {
    path: '/admin/products',
    name: 'adminproducts',
    component: Products,

  },
  {
    path: '/admin/addProduct',
    name: 'addProducts',
    component: addProduct,

  }, {
    path: '/admin/editProduct/:id',
    name: 'editProduct', 
    params: true,
    component: editProduct,

  }
]

const router = new VueRouter({
  routes
})

export default router
