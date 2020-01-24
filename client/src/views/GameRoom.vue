<template>
<<<<<<< HEAD
  <div class="game">
    <div class="card w-75 text-center py-4 mx-auto"></div>
    <question :question="question" />
    <answer
      :answer="answer"
      :answers="answers"
      :score="score"
      :currentScore="currentScore"
      @update-score="addScore"
    />
    <button @click.prevent="getQuestion">NEXT</button>
=======
  <div>
    <h1>TEst</h1>
>>>>>>> development
  </div>
</template>

<script>
<<<<<<< HEAD
import question from '@/components/Question.vue'
import answer from '@/components/Answer.vue'
export default {
  data () {
    return {
      questions: this.$store.state.questions,
      question: '',
      answer:[],
      answers: this.$store.state.answers,
      object: {},
      score:0,
      currentScore:0,
      questionIndex:0
    }
  },
  created() {
    console.log('cek datanya ==========>', this.questions)
    this.getQuestion()
  },
  methods : {
    getQuestion (answer) {
      if (this.questionIndex < 5) {
      this.questionIndex += 1
        this.object = this.questions.shift()
        this.question = Object.keys(this.object)[0]
        this.answer = Object.values(this.object)[0]
        this.currentScore = this.score
      }
      else {
        // ke result
      }
    },
    addScore(value) {
      this.score += value
    }
  },
  components : {
    question,
    answer
  }
=======
export default {

>>>>>>> development
}
</script>

<style>
<<<<<<< HEAD
=======

>>>>>>> development
</style>
