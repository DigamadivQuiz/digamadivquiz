import Vue from 'vue'
import Vuex from 'vuex'
import db from '../config/firebase'
import firebase from 'firebase'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    rooms: []
  },
  mutations: {
    emptyRooms (state) {
      state.rooms = []
    },
    fetchRooms (state, rooms) {
      state.rooms = rooms
    }
  },
  actions: {
    fetchData () {
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
    addRoom ({ commit }, data) {
      console.log(data)
      return db.collection('rooms').add({
        name: data.roomName,
        players: [data.playerName],
        ready: false
      })
    },
    enterRoom ({ commit }, data) {
      const roomRef = db.collection('rooms').doc(data.roomId)
      return roomRef.update({
        players: firebase.firestore.FieldValue.arrayUnion(data.playerName),
        ready: true
      })
    }
  },
  modules: {
  }
})
