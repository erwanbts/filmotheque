import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie/:id(\\d+)',
    name: 'Movie-id',
    component: () => import('../views/Movie.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: "/add",
    name: "Add",
    component: () => import('../views/Add.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
