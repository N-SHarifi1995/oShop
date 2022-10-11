import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddCategoury from '../components/categoury/addCategoury'
import Categouries from '../components/categoury/categoryview'
import Products from '../components/products/productView'
import addProduct from '../components/products/addProduct'
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
    component:AddCategoury,
    
  },
  {
    path: '/admin/Categouries',
    name: 'Categoris',
    component:Categouries,
    
  },{
    path: '/admin',
    name: 'Admin',
    component:adminPage,
    
  },{
    path: '/admin/products',
    name: 'products',
    component:Products,
    
  },
  {
    path: '/admin/addProduct',
    name: 'addProducts',
    component:addProduct,
    
  }
]

const router = new VueRouter({
  routes
})

export default router
