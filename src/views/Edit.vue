<template>
  <div id="edit">
    <button id="back" v-on:click="back()"> Back</button>
    <form id="formM" @submit="submitEdit">
      <label> Titre :</label>
      <input type="text" v-model="titre">
      <br>
      <label> Annee :</label>
      <input type="text" v-model="annee">
      <br>
      <label> Realisateur :</label>
      <input type="text" v-model="realisateurPrenom">
      <input type="text" v-model="realisateurNom">
      <input type="text" v-model="realisateurNationality">
      <input type="text" v-model="realisateurBirth">
      <input type="submit" value="submit">
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
