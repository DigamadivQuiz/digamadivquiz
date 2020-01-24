import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firebase'
import firebase from 'firebase'

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
      ['jawabancoy 1', 'jawabancoy 2', 'jawabancoy 3', 'jawabancoy 4']],
    rooms: [],
    room: {
      players: []
    }
  },
  mutations: {
    emptyRooms(state) {
      state.rooms = []
    },
    fetchRooms(state, rooms) {
      state.rooms = rooms
    },
    setRoom(state, room) {
      state.room = room
    }
  },
  actions: {
    fetchData() {
      db.collection('rooms')
        .onSnapshot((doc) => {
          this.commit('emptyRooms')
          const rooms = []
          doc.docs.forEach((document) => {
            const updatedRoom = document.data()
            updatedRoom.id = document.id
            rooms.push(updatedRoom)
          })
          this.commit('fetchRooms', rooms)
        })
    },
    addRoom({ commit }, data) {
      console.log(data)
      return db.collection('rooms').add({
        name: data.roomName,
        players: [data.playerName],
        ready: false,
        playing: 'wait',
        scoreOne: 0,
        scoreTwo: 0
      })
    },
    enterRoom({ commit }, data) {
      const roomRef = db.collection('rooms').doc(data.roomId)
      return roomRef.update({
        players: firebase.firestore.FieldValue.arrayUnion(data.playerName),
        ready: true
      })
    },
    gameRoom({ commit }, data) {
      db.collection('rooms').doc(data.roomId)
        .onSnapshot((doc) => {
          const room = doc.data()
          this.commit('setRoom', room)
        })
    },
    gamePlaying({ commit }, data) {
      const roomRef = db.collection('rooms').doc(data.roomId)
      roomRef.update({
        playing: 'play'
      })
    },
    inputScore({ commit }, data) {
      const roomRef = db.collection('rooms').doc(data.roomId)
      if (data.scoreOne) {
        roomRef.update({
          scoreOne: data.scoreOne
        })
      } else if (data.scoreTwo) {
        roomRef.update({
          scoreTwo: data.scoreTwo
        })
      }
    },
    playingStat({ commit }, data) {
      const roomRef = db.collection('rooms').doc(data.roomId)
      roomRef.update({
        playing: 'done'
      })
    }
  },
  modules: {
  }
})
