<template>
  <div class="game container mt-5">
    <PlayerRoomReady
      v-if="room.playing === 'wait'"
    />
    <div class="row" v-if="room.playing === 'play'">
      <div class="col-12 bg-white p-4 rounded">
        <p class="lead">{{ text }}</p>
      </div>
      <div class="text-dark col-12 bg-white p-2 rounded my-2"
        v-if="textInput">
        {{ typedText }}
      </div>

      <div :class="textColor" class="col-12 bg-white p-2 rounded my-2"
        v-if="textInput">
        {{ textInput }}
      </div>
      <div class="col-12 mt-5">
        <form @submit.prevent="checkAnswer">
          <div class="form-group text-white">
            <label for="exampleInputEmail1">Ketik di sini</label>
            <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Sikat Broo" v-model="textInput">
          </div>
          <input type="submit" class="btn btn-warning">
        </form>
      </div>
    </div>
    <ScoreBoard v-if="room.playing === 'done'"/>
  </div>
</template>

<script>
import PlayerRoomReady from '@/components/PlayerRoomReady.vue'
import ScoreBoard from '@/components/ScoreBoard.vue'
import Swal from 'sweetalert2'
import Nani from '../assets/nani.mp3'
import lilboom from '../assets/lilboom.mp3'

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
      questionIndex: 0,
      textInput: '',
      textColor: 'text-white'
    }
  },
  created() {
    console.log('cek datanya ==========>', this.questions)
    this.getQuestion()
    this.$store.dispatch('gameRoom', {
      roomId: this.$route.params.id
    })
    if (this.$store.state.room.playing === 'play') {
      const audio = new Audio(lilboom)
      audio.play()
    }
  },
  computed: {
    room () {
      return this.$store.state.room
    },
    text () {
      return this.$store.state.text
    },
    typedText () {
      let currentLength = this.textInput.length
      let result = this.text.slice(0, currentLength)
      if (result === this.textInput) {
        this.textColor = 'text-success'
      } else {
        let audio = new Audio(Nani)
        this.textColor = 'text-danger'
        audio.play()
      }
      return result
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
    },
    checkAnswer() {
      if (this.textInput === this.text) {
        const playerName = localStorage.getItem('playerName')
        const roomId = this.$route.params.id
        this.$store.dispatch('playingStat', {
          playerName,
          roomId
        })
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Waduh..',
          text: 'Belum kelar kok ngepush master'
        })
      }
    }
  },
  components: {
    PlayerRoomReady,
    ScoreBoard
  }
};
</script>

<style>
</style>
