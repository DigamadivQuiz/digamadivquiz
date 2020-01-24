<template>
  <div class="my-5 text-center">
    <form @submit.prevent="addRoom">
      <div class="form-group">
        <label class="text-white" for="roomName">Room Name</label>
        <input type="text" class="form-control" id="roomName" placeholder="Colosseum" required
          v-model="roomName"
        >
      </div>
      <button type="submit" class="btn btn-primary">Create Room</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'FormAddRoom',
  data () {
    return {
      roomName: ''
    }
  },
  methods: {
    addRoom () {
      const playerName = localStorage.getItem('playerName')
      const roomName = this.roomName
      this.$store.dispatch('addRoom', {
        roomName,
        playerName
      })
        .then((docRef) => {
          console.log(docRef)
          this.$router.push(`/${docRef.id}`)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
