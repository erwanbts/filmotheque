<template>
  <div id="app">
    <div id="brand">
      <h1> FILMOTHEQUE </h1>
    </div>
    <div id="nav">
      <div>
        <ul>
          <li>
            <router-link to="/"><i class="fas fa-home"></i></router-link>
          </li>
          <li>
            <router-link to="/add"><i class="fas fa-plus"></i></router-link>
          </li>
        </ul>
      </div>
    </div>

    <div id="page">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'stylesheet/main.scss';
</style>

