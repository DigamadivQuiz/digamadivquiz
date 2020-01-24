<template>
  <div class="container text-center mt-4">
    <div class="row">
      <div class="col">
        {{ score }}  
        <div v-for="(ans, i) in answer" :key="i">
          <Button type="button" class="btn btn-secondary px-4 mx-2 my-2"  v-if="i%2 == 0" @click.prevent="isTrue(ans)">{{ Object.values(ans)[0] }}</Button>
          <Button type="button" class="btn btn-dark px-4 mx-2 my-2"  v-if="i%2 !== 0" @click.prevent="isTrue(ans)" v-on:click.prevent="playSound">{{ Object.values(ans)[0] }}</Button>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sound from "../assets/ugh.mp3"

export default {
  data() {
    return {

    }
  },
  props: {
    answer: Array,
    score: Number,
    currentScore: Number
  },
  methods: {
    isTrue(ans) {
      this.playSound()
      const checker = Number(Object.keys(ans)[0]);
      console.log("checker", checker);
      if (this.score === this.currentScore && checker)
        this.$emit("update-score", 20);
    },
    playSound() {
      // sound = this.sound
      let audio = new Audio(sound)
      audio.play()
    }
  }
};
</script>

<style>
</style>