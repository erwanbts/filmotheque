<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/add">Add</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scoped>
  @import 'stylesheet/main.scss';
</style>

