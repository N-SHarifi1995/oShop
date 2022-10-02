import Vue from 'vue'
import Vuex from 'vuex'
import api from '../services/API'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: []
  },
  getters: {
  },
  mutations: {
    get_category(state, cat) {
      state.categories = cat

    }
  },  




  actions: {
    async GetCategoury({ commit }) {

      try {
        let res = await api().get('/category/');
        let result = res.data;

        if (res.status == 200) {

          result = result.filter(j => typeof j.categoryName == 'string')
          let resultt = result.filter(i => i.categoryName.includes('* '))
          let categories = resultt
      
          commit('get_category', categories)

        }
      } catch (error) {
        alert('dd')
        // new Swal({
        //   text: "There are some problems`",
        //   icon: 'error'

        // })
      }},
    async AddCategory({ commit },newCategory) {

      try {
        let result = await api().post('/category/create',newCategory);
        
        console.log(result)
        if (result.status==201||result.status==201) {
          alert('vuex.okie')
         commit('get_category','')
          return result
         
        }
      } catch (error){
        return error
      }


    }
  },
  modules: {
  }
})
