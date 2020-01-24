<template>
  <div class="container">
    <div class="card text-center">
      <div class="card-header">{{roomName}}</div>
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
      roomName : 'ini dari state roomName',
      player1 : 'Ini dari state player1',
      player2 : 'Ini dari state player2'
    }
  }
};
</script>

<style>

</style>