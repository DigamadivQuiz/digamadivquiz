<template>
  <div class="home">
    {{ rooms }}
  </div>
</template>

<script>
// @ is an alias to /src
import db from '../config/firebase.js'

export default {
  name: 'home',
  data () {
    return {
      rooms: []
    }
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
