<template>
  <div id="edit">
    <label> Titre :</label>
    <input type="text" v-model="titre">
    <br>
    <label> Annee :</label>
    <input type="text" v-model="annee">
    <br>
    <label> Realisateur :</label>
    <input type="text" v-model="shared_data.movies[id].realisateur">
  </div>
</template>

<script>
export default {
  name: 'Movie',
  props: [
    'movie',
  ],
  data: function() {
    return {
      id: this.$route.params.id,
      shared_data: window.shared_data,
    }
  },
  methods: {
    supprimerMovie() {
      this.shared_data.movies.splice(this.movie.id, 1)
    }
  },
  computed: {
    this.movies[this.id].titre =  this.titre,
    
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
