<template>
  <div class="col">
    <form @submit.prevent="addName">
      <div class="form-group">
        <label for="playerName">Player Name</label>
        <input type="text" class="form-control" id="playerName" placeholder="Gladiator" required
          v-model="playerName"
        >
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerName: ''
    }
  },
  methods: {
    addName () {
      localStorage.setItem('playerName', this.playerName)
      this.$router.push('/rooms')
    }
  }
}
</script>

<style>

</style>
