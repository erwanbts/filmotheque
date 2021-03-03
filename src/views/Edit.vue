<template>
  <div id="edit">
    <label> Titre :</label>
    <input type="text" v-model="formTitre">
    <br>
    <label> Annee :</label>
    <input type="text" v-model="annee">
    <br>
    <label> Realisateur :</label>
    <input type="text" v-model="shared_data.movies[id].realisateur">

    <input>
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
      this.shared_data.movies[this.id].$delete(this.movie.id, 1)
      this.$router.go(-1)
    }
  },
  mounted() {
    this.formTitre = this.shared_data.movies[this.id]
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
