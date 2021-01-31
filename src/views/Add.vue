<template>
  <div class="add">
    <p>TITRE :</p><input type="text" v-model="film">
    <p>ANNEE :</p><input type="text" v-model="annee">
    <p>REALISATEUR :</p><input type="text" v-model="realisateur"> <br/>
    <button type="submit" v-on:click="add(film, annee, realisateur)"> Add </button> <br />
  </div>
</template>

<script>
export default {
  name: 'Add',
  methods: {
    add: function(film, annee="", realisateur) {
      this.movies.push({titre: film, annee: annee, realisateur: realisateur})
    }
  }
}
</script>
