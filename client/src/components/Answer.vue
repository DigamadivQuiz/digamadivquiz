<template>
  <div class="container">
    <div v-for="(ans, i) in answer">
      <Button @click.prevent="isTrue(ans)">{{ Object.values(ans)[0] }}</Button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props : {
    answer: Array,
    score: Number,
    currentScore: Number
  },
  methods: {
    isTrue(ans) {
      const checker = Number(Object.keys(ans)[0])
      console.log('checker', checker)
      if (this.score === this.currentScore && checker)
        this.$emit('update-score', 20)
    }
  }
}
</script>

<style>
</style>