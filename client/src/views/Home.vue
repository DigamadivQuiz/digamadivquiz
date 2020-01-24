<template>
  <div class="container">
    <div class="row">
      <FormName/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import FormName from '../components/FormName'

export default {
  name: 'home',
  computed: {
    rooms () {
      return this.$store.state.rooms
    }
  },
  components: {
    FormName
  }
}
</script>

<style>
body {
  background-image: url('https://images8.alphacoders.com/912/912409.png');
}
</style>
