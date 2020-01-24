<template>
  <div class="col-sm-6 col-lg-3 p-3">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">{{ room.name }}</h5>
        <h6 class="card-subtitle mb-2 text-muted">Status: {{ status }}</h6>
        <button class="btn-sm btn-dark"
          @click="enterRoom"
          v-if="!room.ready"
        >Enter</button>
        <i class="fas fa-lock" v-if="room.ready"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoomCard',
  data () {
    return {
      stat: ''
    }
  },
  props: {
    room: Object
  },
  computed: {
    status () {
      if (this.room.ready) {
        return 'full'
      } else {
        return 'waiting'
      }
    }
  },
  methods: {
    enterRoom () {
      const playerName = localStorage.getItem('playerName')
      const roomId = this.room.id
      this.$store.dispatch('enterRoom', {
        playerName,
        roomId
      })
        .then(() => {
          this.$router.push(`/${this.room.id}`)
        })
    }
  }
}
</script>

<style>

</style>
