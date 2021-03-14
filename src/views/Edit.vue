<template>
  <div id="edit">
    <button id="back" v-on:click="back()"> Back</button>

    <form id="formM" @submit="submitEdit">
      <div class="titlePage">
        <h2> Formulaire de modification d'un film </h2>
      </div>
      <label> Titre </label>
      <input type="text" v-model="titre">
      <br>
      <label> Annee </label>
      <input type="text" v-model="annee">
      <br>
      <h3> Realisateur </h3>
      <div>
        <label for="realisateurPrenom"> Prénom </label>
        <input type="text" id="realisateurPrenom" v-model="realisateurPrenom">
        <label for="realisateurNom"> Nom </label>
        <input type="text" id="realisateurNom" v-model="realisateurNom">
      </div>
      <div>
        <label for="realisateurNationality"> Nationalité </label>
        <input type="text" id="realisateurNationality" v-model="realisateurNationality">
        <label for="realisateurBirth"> Date de Naissance</label>
        <input type="date" id="realisateurBirth" v-model="realisateurBirth">
      </div>

      <input type="submit" value="Modifier le film">
    </form>

  </div>
</template>

<script>
export default {
  name: 'Edit',
  data: function() {
    return {
      id: this.$route.params.id - 1,
      shared_data: window.shared_data,

      titre: this.titre,
      annee: this.annee,
      realisateurPrenom: this.realisateurPrenom,
      realisateurNom: this.realisateurNom,
      realisateurNationality: this.realisateurNationality,
      realisateurBirth: this.realisateurBirth
    }
  },
  methods: {
    submitEdit() {
      console.log(this.id)
      this.shared_data.movies[this.id].titre = this.titre,
      this.shared_data.movies[this.id].annee = this.annee,
      this.shared_data.movies[this.id].realisateur.prenom = this.realisateurPrenom,
      this.shared_data.movies[this.id].realisateurNom = this.realisateurNom,
      this.shared_data.movies[this.id].realisateur.nationality = this.realisateurNationality,
      this.shared_data.movies[this.id].realisateur.birth = this.realisateurBirth
      this.$router.push({name: 'Movie-id'})
    },
    back: function() {
      this.$router.push({name: 'Movie-id'})
    }
  },
  mounted() {
    this.titre = this.shared_data.movies[this.id].titre
    this.annee = this.shared_data.movies[this.id].annee
    this.realisateurPrenom = this.shared_data.movies[this.id].realisateur.prenom
    this.realisateurNom = this.shared_data.movies[this.id].realisateur.nom
    this.realisateurNationality = this.shared_data.movies[this.id].realisateur.nationality
    this.realisateurBirth = this.shared_data.movies[this.id].realisateur.birth
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
