import Vue from 'vue';
import Vuex from 'vuex';
import { reqNewsList } from '../api';
import * as mutations from './mutations'
import * as actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    news: [],
    asks: [],
    jobs: [],
  },
  mutations: {
    ...mutations,
    setNewsList(state, data) {
      state.news = data
    }
  },
  actions: {
    ...actions,
    fetchNewsList(context) {
      reqNewsList()
        .then(res => context.commit('setNewsList', res.data))
        .catch(err => console.log(err))
    },
  }
})

export default store