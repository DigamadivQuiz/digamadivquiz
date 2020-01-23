import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      { "pertanyaan 1": [{ "jawaban 1": true }, { "jawaban 2": false }, { "jawaban 3": false }, { "jawaban 4": false }] },
      { "pertanyaan 2": [{ "jawaban 1": false }, { "jawaban 2": false }, { "jawaban 3": true }, { "jawaban 4": false }] },
      { "pertanyaan 3": [{ "jawaban 1": false }, { "jawaban 2": true }, { "jawaban 3": false }, { "jawaban 4": false }] },
      { "pertanyaan 4": [{ "jawaban 1": false }, { "jawaban 2": false }, { "jawaban 3": false }, { "jawaban 4": true }] },
      { "pertanyaan 5": [{ "jawaban 1": false }, { "jawaban 2": true }, { "jawaban 3": false }, { "jawaban 4": false }] }
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
