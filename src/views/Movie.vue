<template>
  <div id="movie">
    <button id="back" class="btn effect" v-on:click="back()"> <span> Back </span> </button>
    <div class="info-movie">
      <div class="img-movie">
        <img :src="shared_data.movies[id].img" alt="Photo du film">
      </div>
      <div class="jsp-movie">
        <h3> {{shared_data.movies[id].titre}} </h3>

        <p class="important"> Langue </p>
        <p> {{shared_data.movies[id].langue}} </p>

        <p class="important"> Genre </p>
        <p> {{shared_data.movies[id].genre}} </p>

        <p class="important"> Synopsis </p>
        <p> {{shared_data.movies[id].syno}} </p>

        <p class="important"> Réalisteur </p>
        <p> {{shared_data.movies[id].realisateur.nom + " " + shared_data.movies[id].realisateur.prenom}}</p>
        <p> {{shared_data.movies[id].realisateur.birth}} </p>
        <p> {{shared_data.movies[id].realisateur.nationality}} </p>

        <p class="important"> Note </p>
        <rate :length="5" :value="shared_data.movies[id].note" :disabled="true" />

        <div class="buttons">
          <button class="btn effect" type="submit" v-on:click="edit()"> <span> Editer </span> </button>
          <button class="btn effect" type="submit"  v-on:click="supprimerMovie()"> <span> Supprimer </span> </button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Movie',
  data: function() {
    return {
      id: this.$route.params.id-1,
      shared_data: window.shared_data,
    }
  },
  methods: {
    edit() {
      this.$router.push({name: 'Movie-id-edit', params : {id : this.shared_data.movies[this.id].id}})
    },
    supprimerMovie() {
      this.shared_data.movies.splice(this.shared_data.movies[this.id].id, 1)
      this.$router.push({name: 'Home'})
    },
    back: function() {
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
