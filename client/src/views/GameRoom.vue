<template>
  <div class="game">
    <div class="card w-75 text-center py-4 mx-auto"></div>
    <div class="row">{{ question }}</div>
    <div class="row">
      <div class="col">{{ answer }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      questions: this.$store.state.questions,
      question: '',
      answer:[],
      object: {},
      result: {
        corrects:0,
        incorrects:0
      }
    }
  },
  created() {
    console.log('cek datanya ==========>', this.questions)
    this.getQuestion()
  },
  methods : {
    getQuestion: function(answer) {
      this.object = this.questions.shift()
      this.question = Object.keys(this.object)[0]
      this.answer = Object.values(this.object)[0]
      console.log('pertanyaannya    :', this.question)
      console.log('jawabannya       :', this.answer)
    }
  }
}
</script>

<style>
</style>