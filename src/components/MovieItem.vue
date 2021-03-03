<template>
  <div class="movie-item" v-on:click="show()">
    <ul>
      <li>
        <p> {{movie.titre + " " + movie.annee}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: [
    'movie',
  ],
  data: function() {
    return {
      isEdit: false,
    }
  },
  methods: {
    show() {
      this.$router.push({name: 'Movie-id', params : {id : this.movie.id}})
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../stylesheet/main.scss';
</style>
