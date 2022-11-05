import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/API'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    products: [],
    newUser: '',
    token:JSON.parse(window.localStorage.token)
  },
 
  mutations: {
    get_category(state, cat) {
      state.categories = cat

    },
    get_product(state, pro) {
      state.products = pro

    },
    sign_up(state, user) {
      state.newUser = user
    },
    sign_in(state,tkn) {
      state.token= tkn
    }
  },




  actions: {
    async GetCategoury({ commit }) {

      try {
        let res = await api().get('/category/');
        let result = res.data;

        if (res.status == 200) {

          result = result.filter(j => typeof j.categoryName == 'string')
          // let resultt = result.filter(i => i.categoryName.includes(''))
          let categories = result
          commit('get_category', categories)

        }
      } catch (error) {
        alert('dd')
        // new Swal({
        //   text: "There are some problems`",
        //   icon: 'error'

        // })
      }
    },
    async AddCategory({ commit }, newCategory) {

      try {
        let result = await api().post('/category/create', newCategory);

        console.log(result)
        if (result.status == 201 || result.status == 201) {
          alert('vuex.okie')
          commit('get_category', '')
          return result

        }
      } catch (error) {
        return error
      }


    },
    async GetProduct({ commit }) {

      try {
        let res = await api().get('/product/');
        let result = res.data;

        if (res.status == 200) {

          result = result.filter(j => typeof j.name == 'string')
          let resultt = result.filter(i => i.name.includes('a'))
          let products = resultt

          commit('get_product', products)

        }
      } catch (error) {
        alert('dd')
        // new Swal({
        //   text: "There are some problems`",
        //   icon: 'error'

        // })
      }
    },
    async SignUp({ commit }, user) {

      try {
        let res = await api().post('/user/signup', user);

        console.log(res)
        if (res.status == 200 || res.status == 201) {

          commit('sign_up', user)
          return res

        }
      } catch (error) {
        alert('dd')
        
      }
    },
    async SignIn({ commit }, user) {
 
      try {
        let res = await api().post('/user/signIn', user);

        console.log(res)
        if (res.status == 200 || res.status == 201) {
          let token=res.data.token;
          window.localStorage.token=JSON.stringify(token),
         commit('sign_in',JSON.stringify(token))
          //commit('sign_up', user)
          return res

        }
      } catch (error) {
        alert('dd')

      }
    },
  },
  modules: {
  }
})
