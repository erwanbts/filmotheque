<template>
  <div class="movie-item" v-on:click="show()">
    <img :src="movie.img">
    <p class="item"> {{movie.titre}}</p>
    <p> {{movie.id}}</p>
  </div>
</template>

<script>


export default {
  name: 'MovieItem',
  props: [
    'movie'
  ],
  data: function() {
    return {
      note: this.movie.note,
      index: this.movie.id
    }
  },
  methods: {
    show() {
      this.$router.push({name: 'Movie-id', params : {id : this.index.toString()}})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
