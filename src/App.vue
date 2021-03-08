<template>
  <div id="app">
    <div id="brand">
      <h1> FILMOTHEQUE </h1>
    </div>
    <div id="nav">
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/add">Add</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
      </ul>

    </div>
    <div id="page">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'stylesheet/main.scss';
</style>

