import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SpeedingTicket from '../views/SpeedingTicket.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/speeding-ticket',
    name: 'SpeedingTicket',
    component: SpeedingTicket
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
