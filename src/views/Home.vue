<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="block-search">
      <label for="search">Recherche</label> <br />
      <input type="text" id="search" v-model="search" placeholder="Search">
      <div id="showRecheche">
      </div>
    </div>

    <div class="block-movie">
      <router-link :to="{ name: 'Movie-id', params: { id: this.shared_data.movies.id}}"></router-link>
      <MovieItem v-for="(movie, id) in searchMovie" v-bind:key="id" v-bind:movie="movie"></MovieItem>
    </div>

  </div>
</template>

<script>

import MovieItem from '@/components/MovieItem.vue'

export default {
  name: 'Home',
  components: {
    MovieItem
  },
  data: function () {
    return {
      shared_data: window.shared_data,
      search: '',
    }
  },
  computed: {
    searchMovie() {
      return this.shared_data.movies.filter((movie) => {
        return movie.titre.toLowerCase().includes(this.search.toLowerCase()) ||
            movie.realisateur.nom.toLowerCase().includes(this.search.toLowerCase()) ||
            movie.realisateur.prenom.toLowerCase().includes(this.search.toLowerCase()) ||
            movie.realisateur.nationality.toLowerCase().includes(this.search.toLowerCase())

      });
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
