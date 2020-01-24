<template>
  <div class="container mt-5">
    <div class="card text-center">
      <div class="card-header">{{ room.name }}</div>
      <div class="card-body">
         <div class="row my-5">
            <div class="col">
               <h3 class="ml-5">{{ playerOne }}</h3>
            </div>
             <div class="col">
               <h3><strong>VS</strong></h3>
            </div>
            <div class="col">
               <h3 class="mr-5">{{ playerTwo }}</h3>
            </div>
         </div>
        <button class="btn btn-danger"
          v-if="room.ready"
          @click="gamePlaying"
        >Start the match</button>
      </div>
      <div class="card-footer text-muted">You can't start the match if there's no 2 players</div>
    </div>
  </div>
</template>

<script>
export default {
  name : `playerRoom`,
  computed: {
    room () {
      return this.$store.state.room
    },
    playerOne () {
      if (this.$store.state.room.players.length) {
        return this.$store.state.room.players[0]
      } else {
        return 'waiting 0'
      }
    },
    playerTwo () {
      if (this.$store.state.room.players.length === 2) {
        return this.$store.state.room.players[1]
      } else {
        return 'waiting 1'
      }
    }
  },
  methods: {
    gamePlaying () {
      console.log(this.$route.params.id)
      this.$store.dispatch('gamePlaying', {
        roomId: this.$route.params.id})
    }
  }
};
</script>

<style>

</style>