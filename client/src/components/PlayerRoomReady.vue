<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-header">Room Name</div>
      <div class="card-body">
         <div class="row my-5">
            <div class="col">
               <h3 class="ml-5">{{player1}}</h3>
            </div>
             <div class="col">
               <h3><strong>VS</strong></h3>
            </div>
            <div class="col">
               <h3 class="mr-5">{{player2}}</h3>
            </div>
         </div>
        <a href="#" class="btn btn-danger">Start the match</a>
      </div>
      <div class="card-footer text-muted">You can't start the match if there's no 2 players</div>
    </div>
  </div>
</template>

<script>
export default {
  name : `playerRoom`,
  data () {
    return {
      player1 : 'Ini dari state player 1',
      player2 : 'Ini dari state player 2'
    }
  }
};
</script>

<style>

</style>