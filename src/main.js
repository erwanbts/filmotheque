import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

window.shared_data = {
  movies: [
    {
      id: 1,
      titre: "Avatar", annee: 2012,
      img: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/78/95/70/19485155.jpg",
      note: 4,
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
      img: "https://fr.web.img3.acsta.net/c_310_420/o_club300-310x420.png_0_se/medias/nmedia/18/82/69/17/19806656.jpg",
      note: 5,
      realisateur: {
        nom: "Je",
        prenom: "SaisPas",
        nationality: "Français",
        birth : "01/01/1987"
      }},
    {
      id: 3,
      titre: "Titanic", annee: 2000,
      img: "https://fr.web.img6.acsta.net/c_310_420/pictures/19/10/25/11/18/5224976.jpg",
      note: 3,
      realisateur: {
        nom: "Cameron",
        prenom: "James",
        nationality: "USA",
        birth : "01/01/1960"
      }
    },
    {
      id: 4,
      titre: "Mary Poppins", annee: 1965,
      img: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/00/02/52/16/mary.jpg",
      note: 3,
      realisateur: {
        nom: "Stevenson",
        prenom: "Robert",
        nationality: "USA",
        birth : "31/03/1905"
      }
    },
    {
      id: 5,
      titre: "Charlie et la chocolaterie", annee: 2005,
      img: "https://fr.web.img6.acsta.net/c_310_420/medias/nmedia/18/35/48/68/18432369.jpg",
      note: 2,
      realisateur: {
        nom: "Burton",
        prenom: "Tim",
        nationality: "USA",
        birth : "25/08/1958"
      }},
    {
      id: 6,
      titre: "Seul sur Mars", annee: 2015,
      img: "https://fr.web.img6.acsta.net/c_310_420/pictures/15/09/08/15/20/305329.jpg",
      note: 4,
      realisateur: {
        nom: "Scott",
        prenom: "Ridley",
        nationality: "USA",
        birth : "01/01/1960"
      }},
  ]
}

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
