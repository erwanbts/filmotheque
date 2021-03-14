<template>
  <div class="movie-item" v-on:click="show(id)">
    <img :src="movie.img">
    <p class="item"> {{movie.titre}}</p>
  </div>
</template>

<script>


export default {
  name: 'MovieItem',
  props: [
    'movie',
    'id'
  ],
  methods: {
    show(id) {
      this.$router.push({name: 'Movie-id', params : {id : id + 1}})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
