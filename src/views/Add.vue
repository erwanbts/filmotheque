<template>
  <div id="add">
    <p>TITRE :</p><input type="text" v-model="film">
    <p>ANNEE :</p><input type="text" v-model="annee">
    <p>NOM REALISATEUR :</p><input type="text" v-model="nom">
    <p>PRENOM REALISATEUR :</p><input type="text" v-model="prenom">
    <p>NATIONALITE REALISATEUR :</p><input type="text" v-model="nationality">
    <p>DATE DE NAISSANCE REALISATEUR :</p><input type="text" v-model="birth"> <br/>
    <button type="submit" v-on:click="add(film, annee, realisateur)"> Add </button> <br />
  </div>
</template>

<script>
export default {
  name: 'Add',
  methods: {
    add: function(film, annee="", nom, prenom, nationality, birth) {
      this.shared_data.movies.push({id: 4, titre: film, annee: annee})
      this.shared_data.movies.realisateur.push({nom: nom, prenom: prenom, nationality: nationality, birth: birth})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
