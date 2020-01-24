<template>
  <div>
    {{ scoreOne }}
    {{ scoreTwo }}
  </div>
</template>

<script>
export default {
  name: 'ScoreBoard',
  computed: {
    room () {
      return this.$store.state.room
    },
    scoreOne () {
      if (this.$store.state.room.scoreOne) {
        return this.$store.state.room.scoreOne
      } else {
        return `waiting score of player ${room.players[0]}`
      }
    },
    scoreTwo () {
      if (this.$store.state.room.scoreTwo) {
        return this.$store.state.room.scoreTwo
      } else {
        return `waiting score of player ${room.players[1]}`
      }
    }
  }
}
</script>

<style>

</style>
