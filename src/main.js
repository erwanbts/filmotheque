import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.shared_data = {
  movies: [
    {
      id: 1,
      titre: "Avatar", annee: 2012,
      realisateur: {
        nom: "Cameron",
        prenom: "James",
        nationality: "Anglais",
        birth : "01/01/1960"
      }
    },
    {
      id: 2,
      titre: "Intouchable", annee: 2015,
      realisateur: {
        nom: "Je",
        prenom: "SaisPas",
        nationality: "Français",
        birth : "01/01/1987"
      }},
    {
      id: 3,
      titre: "Titanic", annee: 2000,
      realisateur: {
        nom: "Cameron",
        prenom: "James",
        nationality: "USA",
        birth : "01/01/1960"
      }
    },
    {
      id: 4,
      titre: "Mary Poppins", annee: 2012,
      realisateur: {
        nom: "Criquet",
        prenom: "Vert",
        nationality: "Amazonie",
        birth : "01/01/1945"
      }
    },
    {
      id: 5,
      titre: "Charlie et la chocolaterie", annee: 2015,
      realisateur: {
        nom: "Pierre",
        prenom: "De Montesquieux",
        nationality: "Français",
        birth : "01/01/1947"
      }},
    {
      id: 6,
      titre: "Titanic 2", annee: 2000,
      realisateur: {
        nom: "Cameron",
        prenom: "James",
        nationality: "USA",
        birth : "01/01/1960"
      }},
  ]
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
