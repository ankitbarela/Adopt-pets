import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DogView from '../views/DogView.vue'
import PetView from '../views/PetView.vue'
import CatView from '../views/CatView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/dog',
    name: 'dog',
    component: DogView
  },
  {
    path: '/pets/:id',
    name: 'pet',
    component: PetView
  },
  {
    path: '/cat',
    name: 'cat',
    component: CatView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
