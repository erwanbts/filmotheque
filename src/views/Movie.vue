<template>
  <div id="movie">
    {{shared_data.movies[id].titre + " " + shared_data.movies[id].annee}}
    <p> indexe : {{id}}</p>
    <p> movie id : {{shared_data.movies[id].id}} </p>
    <button type="submit" v-on:click="edit()"> Editer </button>
    <button type="submit"  v-on:click="supprimerMovie()"> Supprimer </button>
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
      id: this.$route.params.id - 1,
      shared_data: window.shared_data,
      isEdit: false,
    }
  },
  methods: {
    edit() {
      this.$router.push({name: 'Movie-id-edit', params : {id : this.shared_data.movies[this.id].id}})
    },
    supprimerMovie() {
      this.shared_data.movies.splice(this.shared_data.movies[this.id].id, 1)
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
