<template>
  <div class="game">
    <PlayerRoomReady
      v-if="room.playing === 'wait'"
    />
    <div v-if="room.playing === 'play'">
      <!-- <question 
        :question="question" 
        :questionIndex="questionIndex"
      />
      <answer
        :answer="answer"
        :answers="answers"
        :score="score"
        :currentScore="currentScore"
        @update-score="addScore"
      /> -->
      <form>
        <div class="form-group">
          <label for="exampleInputEmail1">text</label>
          <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <input type="submit">
      </form>
      <div class="text-center">
        <button class="btn btn-lg btn-danger px-5 mt-5" @click.prevent="getQuestion">Next Question</button>
      </div>
    </div>
    <ScoreBoard v-if="room.playing === 'done'"/>
  </div>
</template>

<script>
import question from "@/components/Question.vue"
import answer from "@/components/Answer.vue"
import PlayerRoomReady from '@/components/PlayerRoomReady.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
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
        console.log(this.room.players.indexOf(localStorage.getItem('playerName')))
        const roomId = this.$route.params.id
        if (this.room.players.indexOf(localStorage.getItem('playerName')) === 0) {
          this.$store.dispatch('inputScore', {
            scoreOne: this.score,
            roomId
          })
        } else {
          this.$store.dispatch('inputScore', {
            scoreTwo: this.score,
            roomId
          })
        }
        this.$store.dispatch('playingStat', {
          roomId
        })
      }
    },
    addScore(value) {
      this.score += value;
    }
  },
  components: {
    question,
    answer,
    PlayerRoomReady,
    ScoreBoard
  }
};
</script>

<style>
</style>
