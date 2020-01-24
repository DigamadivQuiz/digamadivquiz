<template>
  <div class="home">
    <!-- <Navbar /> -->
    <!-- <PlayerRoomReady /> -->
    <!-- <Footer /> -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import db from '../config/firebase.js'
import Results from "../components/Results"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PlayerRoomReady from "../components/PlayerRoomReady"
import FormName from '../components/FormName'

export default {
  name: 'home',
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  components: {
    FormName,
    Navbar,
    Footer
  }
}
</script>

<style>
body {
  background-image: url('https://images8.alphacoders.com/912/912409.png');
}
</style>
