import Vue from 'vue'
import Vuex from 'vuex'
import { Transaction } from "@/models/base/transaction.model";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentTransaction: {} as Transaction | null
  },
  getters: {
  },
  mutations: {
    selectTransaction(state, transaction: Transaction) {
      state.currentTransaction = transaction;
    }
  },
  actions: {
  },
  modules: {
  }
})
