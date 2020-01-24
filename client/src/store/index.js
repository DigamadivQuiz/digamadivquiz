import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: [
      { "pertanyaan 1": [{ 1: 'jawaban 1' }, { 0: 'jawaban 2' }, { 0: 'jawaban 3' }, { 0: 'jawaban 4' }] },
      { "pertanyaan 2": [{ 0: 'jawaban 1' }, { 0: 'jawaban 2' }, { 1: 'jawaban 3' }, { 0: 'jawaban 4' }] },
      { "pertanyaan 3": [{ 0: 'jawaban 1' }, { 1: 'jawaban 2' }, { 0: 'jawaban 3' }, { 0: 'jawaban 4' }] },
      { "pertanyaan 4": [{ 0: 'jawaban 1' }, { 0: 'jawaban 2' }, { 0: 'jawaban 3' }, { 1: 'jawaban 4' }] },
      { "pertanyaan 5": [{ 0: 'jawaban 1' }, { 0: 'jawaban 2' }, { 1: 'jawaban 3' }, { 0: 'jawaban 4' }] },
    ],
    answers: [
      ['jawaban 1', 'jawaban 2', 'jawaban 3', 'jawaban 4'],
      ['jawab 1', 'jawab 2', 'jawab 3', 'jawab 4'],
      ['jaw 1', 'jaw 2', 'jaw 3', 'jaw 4'],
      ['jawabannya 1', 'jawabannya 2', 'jawabannya 3', 'jawabannya 4'],
      ['jawabancoy 1', 'jawabancoy 2', 'jawabancoy 3', 'jawabancoy 4']]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
