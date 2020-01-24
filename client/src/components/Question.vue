<template>
  <div class="container">
    <div class="card my-5" style="width: 60%; margin-left: auto; margin-right: auto;">
      <div class="card-header text-center">Question {{questionIndex}}</div>
      <div class="card-body">
        <h5 class="card-title text-center my-3">{{question}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    question: String,
    questionIndex : Number
  }
};
</script>

<style>
</style>
