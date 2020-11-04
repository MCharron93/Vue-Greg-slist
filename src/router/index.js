import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import CarsPage from '../pages/CarsPage.vue'
import ActiveCar from '../pages/ActiveCarPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../pages/About.vue')
  },
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  },
  {
    path: '/car/:carId',
    name: 'ActiveCar',
    component: ActiveCar
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
