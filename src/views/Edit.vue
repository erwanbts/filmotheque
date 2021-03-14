<template>
  <div id="edit">
    <button id="back" class="btn effect" v-on:click="back()"> <span> Back </span> </button>
    <form id="formM" @submit="submitEdit">
      <div class="titlePage">
        <h2> Formulaire de modification d'un film </h2>
      </div>
      <label> Titre </label>
      <input type="text" v-model="titre">
      <br>
      <label> Url </label>
      <input type="url" v-model="img">
      <br>
      <label> Syno </label>
      <textarea cols="35" v-model="syno"></textarea>
      <br>
      <label> Note </label>
      <input type="number" min="1" max="5" v-model="note">
      <br>
      <label> Genre </label>
      <input type="text" v-model="genre">
      <br>
      <label> Langue </label>
      <input type="text" v-model="langue">
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

      <button class="btn effect xl"> <span> Modifier le film </span> </button>
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
      img: this.img,
      annee: this.annee,
      syno: this.syno,
      genre: this.genre,
      langue: this.langue,
      realisateurPrenom: this.realisateurPrenom,
      realisateurNom: this.realisateurNom,
      realisateurNationality: this.realisateurNationality,
      realisateurBirth: this.realisateurBirth
    }
  },
  methods: {
    submitEdit() {
      this.shared_data.movies[this.id].titre = this.titre,
      this.shared_data.movies[this.id].img = this.img,
      this.shared_data.movies[this.id].annee = this.annee,
      this.shared_data.movies[this.id].syno = this.syno,
      this.shared_data.movies[this.id].genre = this.genre,
      this.shared_data.movies[this.id].note = this.note,
      this.shared_data.movies[this.id].langue = this.langue,
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
    this.img = this.shared_data.movies[this.id].img
    this.annee = this.shared_data.movies[this.id].annee
    this.syno = this.shared_data.movies[this.id].syno
    this.genre = this.shared_data.movies[this.id].genre
    this.langue = this.shared_data.movies[this.id].langue
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
