<template>
  <div class="home">
    <div class="block-search">
      <i class="fas fa-search"></i>
      <input type="text" id="search" v-model="search" placeholder="Search">
    </div>

    <div class="block-movies">
      <MovieItem v-for="(movie, id) in searchMovie" :key="id" :movie="movie" :id="id"></MovieItem>
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
