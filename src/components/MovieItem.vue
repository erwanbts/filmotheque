<template>
  <div class="movie-item" v-on:click="show()">
    <ul>
      <li>
        <img :src="movie.img">
        <p> {{movie.titre + " " + movie.annee}}</p>
        <Note :grad="movie.note"/>
      </li>
    </ul>
  </div>
</template>

<script>
import Note from "@/components/Note";

export default {
  name: 'MovieItem',
  components: {
    Note
  },
  props: [
    'movie',
  ],
  data: function() {
    return {
      id: this.$route.params.id,
      shared_data: window.shared_data,
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
