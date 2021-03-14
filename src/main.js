import Vue from 'vue'
import App from './App.vue'
import router from './router'

import rate from 'vue-rate'
import 'vue-rate/dist/vue-rate.css'

Vue.use(rate)

Vue.config.productionTip = false

window.shared_data = {
  movies: [
    {
      id: 1,
      titre: "Avatar", annee: 2012,
      img: "https://fr.web.img5.acsta.net/c_310_420/medias/nmedia/18/78/95/70/19485155.jpg",
      note: 4,
      syno: "Malgré sa paralysie, Jake Sully, un ancien marine immobilisé dans un fauteuil roulant, est resté un combattant au plus profond de son être. Il est recruté pour se rendre à des années-lumière de la Terre, sur Pandora, où de puissants groupes industriels exploitent un minerai rarissime destiné à résoudre la crise énergétique sur Terre. Parce que l'atmosphère de Pandora est toxique pour les humains, ceux-ci ont créé le Programme Avatar, qui permet à des \" pilotes \" humains de lier leur esprit à un avatar, un corps biologique commandé à distance, capable de survivre dans cette atmosphère létale. Ces avatars sont des hybrides créés génétiquement en croisant l'ADN humain avec celui des Na'vi, les autochtones de Pandora.\n" +
          "Sous sa forme d'avatar, Jake peut de nouveau marcher. On lui confie une mission d'infiltration auprès des Na'vi, devenus un obstacle trop conséquent à l'exploitation du précieux minerai. Mais tout va changer lorsque Neytiri, une très belle Na'vi, sauve la vie de Jake...",
      genre: "SF, Action",
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
      syno: "A la suite d’un accident de parapente, Philippe, riche aristocrate, engage comme aide à domicile Driss, un jeune de banlieue tout juste sorti de prison. Bref la personne la moins adaptée pour le job. Ensemble ils vont faire cohabiter Vivaldi et Earth Wind and Fire, le verbe et la vanne, les costumes et les bas de survêtement... Deux univers vont se télescoper, s’apprivoiser, pour donner naissance à une amitié aussi dingue, drôle et forte qu’inattendue, une relation unique qui fera des étincelles et qui les rendra... Intouchables.",
      genre: "Comédie",
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
      syno: "Southampton, 10 avril 1912. Le paquebot le plus grand et le plus moderne du monde, réputé pour son insubmersibilité, le \"Titanic\", appareille pour son premier voyage. Quatre jours plus tard, il heurte un iceberg. A son bord, un artiste pauvre et une grande bourgeoise tombent amoureux.",
      genre: "Historique, Romantique",
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
      syno: "Rien ne va plus dans la famille Banks. La nurse vient de donner ses huit jours. Et ni M. Banks, banquier d'affaire, ni son épouse, suffragette active, ne peuvent s'occuper des enfants Jane et Michaël. Ces derniers passent alors une annonce tout à fait fantaisiste pour trouver une nouvelle nurse. C'est Mary Poppins qui répond et apparaît dès le lendemain, portée par le vent d'Est. Elle entraîne aussitôt les enfants dans son univers merveilleux. Un des plus célèbres films de la production Disney.",
      genre: "famille",
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
      syno: "Charlie est un enfant issu d'une famille pauvre. Travaillant pour subvenir aux besoins des siens, il doit économiser chaque penny, et ne peut s'offrir les friandises dont raffolent les enfants de son âge. Pour obtenir son comptant de sucreries, il participe à un concours organisé par l'inquiétant Willy Wonka, le propriétaire de la fabrique de chocolat de la ville. Celui qui découvrira l'un des cinq tickets d'or que Wonka a caché dans les barres de chocolat de sa fabrication gagnera une vie de sucreries.",
      genre: "famille",
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
      syno: "Lors d’une expédition sur Mars, l’astronaute Mark Watney (Matt Damon) est laissé pour mort par ses coéquipiers, une tempête les ayant obligés à décoller en urgence. Mais Mark a survécu et il est désormais seul, sans moyen de repartir, sur une planète hostile. Il va devoir faire appel à son intelligence et son ingéniosité pour tenter de survivre et trouver un moyen de contacter la Terre. A 225 millions de kilomètres, la NASA et des scientifiques du monde entier travaillent sans relâche pour le sauver, pendant que ses coéquipiers tentent d’organiser une mission pour le récupérer au péril de leurs vies.",
      genre: "SF",
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
