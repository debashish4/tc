import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import state from "@/store/state";

export default new Vuex.Store({
  state,
  mutations,
  actions
})
