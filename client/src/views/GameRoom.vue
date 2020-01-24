<template>
  <div class="game">
    <PlayerRoomReady
      v-if="!room.playing"
    />
    <div v-if="room.playing">
      <question 
        :question="question" 
        :questionIndex="questionIndex"
      />
      <answer
        :answer="answer"
        :answers="answers"
        :score="score"
        :currentScore="currentScore"
        @update-score="addScore"
      />
      <div class="text-center">
        <button class="btn btn-lg btn-danger px-5 mt-5" @click.prevent="getQuestion">Next Question</button>
      </div>
    </div>
  </div>
</template>

<script>
import question from "@/components/Question.vue";
import answer from "@/components/Answer.vue";
import PlayerRoomReady from '@/components/PlayerRoomReady.vue'
export default {
  data() {
    return {
      questions: this.$store.state.questions,
      question: "",
      answer: [],
      answers: this.$store.state.answers,
      object: {},
      score: 0,
      currentScore: 0,
      questionIndex: 0
    }
  },
  created() {
    console.log('cek datanya ==========>', this.questions)
    this.getQuestion()
    this.$store.dispatch('gameRoom', {
      roomId: this.$route.params.id
    })
  },
  computed: {
    room () {
      return this.$store.state.room
    }
  },
  methods: {
    getQuestion(answer) {
      if (this.questionIndex < 5) {
        this.questionIndex += 1;
        this.object = this.questions.shift();
        this.question = Object.keys(this.object)[0];
        this.answer = Object.values(this.object)[0];
        this.currentScore = this.score;
      } else {
        // ke result
      }
    },
    addScore(value) {
      this.score += value;
    }
  },
  components: {
    question,
    answer,
    PlayerRoomReady
  }
};
</script>

<style>
</style>
