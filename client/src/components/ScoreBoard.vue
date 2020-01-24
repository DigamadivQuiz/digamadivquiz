<template>
  <div class="container mt-5">
    <div 
      class="row"
      v-if="winner"
    >
      <img src="../assets/win.jpg" alt="">
      <h2 class="mt-3">You are the winner</h2>
    </div>
    <div class="row"
      v-if="!winner"
    >
      <img src="../assets/lose.jpg" alt="">
      <h2 class="mt-3">You are the loser</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScoreBoard',
  computed: {
    winner () {
      if (this.$store.state.room.winner !== localStorage.getItem('playerName')) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>

<style scoped>
img {
  margin: auto;
  max-width: 50rem;
}

</style>
