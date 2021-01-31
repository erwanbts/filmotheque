<template>
  <div class="movie-item">
    <ul>
      <li>
        {{movie.titre + " " + movie.annee}} <button type="submit" v-on:click="show()"> Show </button> <button type="submit" v-on:click="edit()"> Editer </button> <button type="submit"  v-on:click="supprimer(key)"> Supprimer </button>
        <div id="plus">
          <div id="show" v-if="isShow">
            <p> {{ movie.realisateur }}</p>
          </div>
          <div id="edit" v-if="isEdit">
            <label> Titre :</label>
            <input type="text" v-model="movie.titre">
            <br>
            <label> Annee :</label>
            <input type="text" v-model="movie.annee">
            <br>
            <label> Realisateur :</label>
            <input type="text" v-model="movie.realisateur">
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: ['movie'],
  data: function() {
    return {
      isShow: false,
      isEdit: false,
    }
  },
  methods: {
    show: function() {
      this.isShow = true
    },
    edit: function() {
      this.isEdit = true
    },
    supprimer: function() {
      this.movies.splice(1, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../stylesheet/main.scss';
</style>
