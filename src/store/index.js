import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
import actions from "@/store/actions";
import mutations from "@/store/mutations";
import state from "@/store/state";

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state,
  mutations,
  actions
})
