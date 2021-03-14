<template>
  <div id="add">
    <button id="back" class="btn effect" v-on:click="back()"> <span> Back </span> </button>
    <form id="formA" @submit="submitAdd">
      <p class="important"> Titre </p>
      <input type="text" v-model="film" placeholder="Titre du film">

      <p class="important"> Url photo d'affiche </p>
      <input type="url" v-model="img" placeholder="Url de la photo">

      <p class="important"> Année de sortie </p>
      <input type="number" v-model="annee" placeholder="2000">

      <p class="important"> Synopsis </p>
      <textarea cols="32" v-model="syno" placeholder="Synopsis"></textarea>

      <p class="important"> Langue </p>
      <input type="text" v-model="langue" placeholder="Langue">

      <p class="important"> Genre </p>
      <input type="text" v-model="genre" placeholder="genre">

      <p class="important"> Nom Réalisateur</p>
      <input type="text"  v-model="nom" placeholder="Nom du réalisateur">

      <p class="important"> Prenom Réalisateur</p>
      <input type="text" v-model="prenom" placeholder="Prenom du réalisateur">

      <p class="important"> Nationalité Réalisateur </p>
      <input type="text" v-model="nationality" placeholder="Nationalité du réalisateur">

      <p class="important"> Date de naissance Réalisateur </p>
      <input type="date" v-model="birth" placeholder="Date de naissance du réalisateur"> <br/>

      <button class="btn effect xl"> <span> Ajouter le film </span> </button>
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
      img: this.img,
      syno: this.syno,
      nom: this.nom,
      prenom: this.prenom,
      nationality: this.nationality,
      birth: this.birth,
      genre: this.genre,
      langue: this.langue

    }
  },
  methods: {
    submitAdd: function() {
      this.shared_data.movies.push({id: 4, titre: this.film, annee: this.annee, img: this.img, syno: this.syno, genre: this.genre, langue: this.langue, realisateur: {nom: this.nom, prenom: this.prenom, nationality: this.nationality, birth: this.birth}})
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

