<template>
  <div id="add">
    <button v-on:click="back()"> Back</button>
    <form id="formA" @submit="submitAdd">
      <p>TITRE :</p><input type="text" v-model="film">
      <p>ANNEE :</p><input type="text" v-model="annee">
      <p>NOM REALISATEUR :</p><input type="text" v-model="nom">
      <p>PRENOM REALISATEUR :</p><input type="text" v-model="prenom">
      <p>NATIONALITE REALISATEUR :</p><input type="text" v-model="nationality">
      <p>DATE DE NAISSANCE REALISATEUR :</p><input type="text" v-model="birth"> <br/>
      <input type="submit" value="submit"> <br />
    </form>
  </div>
</template>

<script>
export default {
  name: 'Add',
  data: function() {
    return {
      shared_data: window.shared_data,
      film: this.film,
      annee: this.annee,
      nom: this.nom,
      prenom: this.prenom,
      nationality: this.nationality,
      birth: this.birth

    }
  },
  methods: {
    submitAdd: function() {
      this.shared_data.movies.push({id: 4, titre: this.film, annee: this.annee, realisateur: {nom: this.nom, prenom: this.prenom, nationality: this.nationality, birth: this.birth}})
      this.$router.push({name: 'Home'})
      console.log({id: 4, titre: this.film, annee: this.annee, realisateur: {nom: this.nom, prenom: this.prenom, nationality: this.nationality, birth: this.birth}})
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

