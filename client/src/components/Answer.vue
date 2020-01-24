<template>
  <div class="container text-center mt-4">
    <div class="row">
      <div class="col">
        <div v-for="(ans, i) in answer" :key="i">
          <Button type="button" class="btn btn-secondary px-4 mx-2 my-2"  v-if="i%2 == 0" @click.prevent="isTrue(ans)">{{ Object.values(ans)[0] }}</Button>
          <Button type="button" class="btn btn-dark px-4 mx-2 my-2"  v-if="i%2 !== 0" @click.prevent="isTrue(ans)">{{ Object.values(ans)[0] }}</Button>    
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    answer: Array,
    score: Number,
    currentScore: Number
  },
  methods: {
    isTrue(ans) {
      const checker = Number(Object.keys(ans)[0]);
      console.log("checker", checker);
      if (this.score === this.currentScore && checker)
        this.$emit("update-score", 20);
    }
  }
};
</script>

<style>
</style>