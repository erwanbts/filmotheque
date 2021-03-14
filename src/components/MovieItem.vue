<template>
  <div class="movie-item" v-on:click="show()">
    <img :src="movie.img">
    <p class="item"> {{movie.titre}}</p>
  </div>
</template>

<script>


export default {
  name: 'MovieItem',
  props: [
    'movie'
  ],
  methods: {
    show() {
      this.$router.push({name: 'Movie-id', params : {id : this.movie.id}})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
