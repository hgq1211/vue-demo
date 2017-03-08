/**
 * Created by admin on 2017/3/3.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
const state={
  num:0,
  getData:''
}
const mutations={
    inc(state){
      state.num++
    },
  dec(state){
      state.num--
  }
}
const actions={
  inc:({commit})=>commit('inc'),
  dec:({commit})=>commit('dec'),
  getJsons(context){
    axios.get('../static/getDate.json').then(function (response) {
      context.state.getData=response.data.name;
    })
  }
}
const getters={
  isshow:state=>state.num%3==0?true:false
}
export default new Vuex.Store({
    state,
  mutations,
  getters,
  actions
})
