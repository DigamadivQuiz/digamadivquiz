<template>
  <div class="home">
    <Navbar />
    <!-- <PlayerRoomReady /> -->
    <QuestionCardRadio />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import db from '../config/firebase.js'
import Results from "../components/Results"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PlayerRoomReady from "../components/PlayerRoomReady"
import QuestionCardRadio from "../components/QuestionCardRadio"

export default {
  name: 'home',
  data () {
    return {
      rooms: []
    }
  },
  components : {
    Results,
    Navbar,
    Footer,
    PlayerRoomReady,
    QuestionCardRadio
  },
  methods: {
    fetchData () {
      db.collection('rooms')
        .onSnapshot((doc) => {
          this.rooms = []
          doc.docs.forEach((document) => {
            const updatedRoom = document.data()
            updatedRoom.id = document.id
            this.rooms.push(updatedRoom)
          })
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
