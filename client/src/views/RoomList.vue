<template>
  <div class="container">
    <div class="row">
      <div class="col-6 offset-3">
        <FormAddRoom />
      </div>
      <RoomCard
        v-for="room in rooms" :key="room.id"
        :room="room"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import RoomCard from '../components/RoomCard'
import FormAddRoom from '../components/FormAddRoom'

export default {
  name: 'RoomList',
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  components: {
    RoomCard,
    FormAddRoom
  },
  created () {
    this.$store.dispatch('fetchData')
  }
}
</script>

<style>
body {
  background-image: url('https://images8.alphacoders.com/912/912409.png');
}
</style>
