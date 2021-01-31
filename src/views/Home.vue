<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="block-search">
      <label for="search">Recherche</label> <br />
      <input type="text" id="search" v-model="search" placeholder="Search title..">
      <!-- <button type="submit" @click="rechercher"> Rechercher </button> -->
      <div id="showRecheche">
      </div>
    </div>

    <div class="block-movie">
      <MovieItem v-for="(movie, key) in searchMovie" v-bind:key="key" v-bind:movie="movie"></MovieItem>
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
      movies: [
         {titre: "Avatar", annee: 2012,
          realisateur: {
            nom: "Cameron",
            prenom: "James",
            nationality: "Anglais",
            birth : "01/01/1960"
          }
        },
        {titre: "Intouchable", annee: 2015,
          realisateur: {
            nom: "Je",
            prenom: "SaisPas",
            nationality: "Français",
            birth : "01/01/1987"
          }},
        {titre: "Titanic", annee: 2000,
          realisateur: {
            nom: "Cameron",
            prenom: "James",
            nationality: "USA",
            birth : "01/01/1960"
          }},
        {titre: "Mary Poppins", annee: 2012,
          realisateur: {
            nom: "Criquet",
            prenom: "Vert",
            nationality: "Amazonie",
            birth : "01/01/1945"
          }
        },
        {titre: "Charlie et la chocolaterie", annee: 2015,
          realisateur: {
            nom: "Pierre",
            prenom: "De Montesquieux",
            nationality: "Français",
            birth : "01/01/1947"
          }},
        {titre: "Titanic 2", annee: 2000,
          realisateur: {
            nom: "Cameron",
            prenom: "James",
            nationality: "USA",
            birth : "01/01/1960"
          }},
      ],
      search:'',
    }
  },
  computed: {
    searchMovie() {
      return this.movies.filter((movie) => {
        return movie.titre.toLowerCase().includes(this.search.toLowerCase())
      });
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../stylesheet/main.scss';
</style>
