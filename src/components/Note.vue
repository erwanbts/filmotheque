<template>
  <div id="block-note">
    <ul v-for="star in 5" :class="{ 'active': star <= stars }" :key="star.stars">
      <i :class="star <= stars ? 'star_v' : 'star'"></i>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Note',
  props: [
    'grade',
  ],
  data: function() {
    return {
      stars: this.grade
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../stylesheet/main.scss';
</style>
