import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/API'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [],
    CategouryIds: [],
    products: [],
    newUser: '',
    token: JSON.parse(window.localStorage.token)
  },

  mutations: {
    get_category(state, cat) {
      state.categories = cat[0]
      state.CategouryIds = cat[1]

    },
    get_product(state, pro) {
      state.products = pro

    },
    sign_up(state, user) {
      state.newUser = user
    },
    sign_in(state, tkn) {
      state.token = tkn
    }
  },




  actions: {
    async GetCategoury({ commit }) {
      await api().get('/category/').then(res => {
        let result = res.data;
        if (res.status == 200) {
          result = result.filter(j => typeof j.categoryName == 'string')
          let categories = result.filter(i => i.categoryName.includes(' *'))
          let ides = categories.map(i => i.id)
          window.localStorage.categoryId = JSON.stringify(ides)

          commit('get_category', [categories, ides])
     
         // console.log(categories)
          return categories

        }

      }

      ).catch(error=>console.log(error))





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
      await api().get('/product/').then(res => {
        let result = res.data;
        if (res.status == 200) {
          let resultt = result.filter(j => typeof j.name == 'string')
          // let products = resultt.filter(i => i.name.includes('b'))
           let products = resultt.filter(i => this.state.CategouryIds.includes(i.categoryId))

          // console.log(products)
          commit('get_product', products)

        }
      }).catch(error=>console.log(error))


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
          let token = res.data.token;
          window.localStorage.token = JSON.stringify(token),
            commit('sign_in', JSON.stringify(token))
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
