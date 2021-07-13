import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Pricing from '../views/Pricing.vue'
import HowItWorks from '../views/HowItWorks.vue'
import Tickets from '../views/Tickets.vue'

import SpeedingTicket from '../views/SpeedingTicket.vue'
import RedLightCamera from '../views/RedLightCamera.vue'
import GeneralTraffic from '../views/GeneralTraffic.vue'
import StopSignTicket from '../views/StopSignTicket.vue'
import RedLightTicket from '../views/RedLightTicket.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },
  {
    path: '/how-it-works',
    name: 'HowItWorks',
    component: HowItWorks
  },
  {
    path: '/tickets',
    name: 'Tickets',
    component: Tickets
  },
  {
    path: '/speeding-ticket',
    name: 'SpeedingTicket',
    component: SpeedingTicket
  },
  {
    path: '/red-light-camera',
    name: 'RedLightCamera',
    component: RedLightCamera
  },
  {
    path: '/general-traffic',
    name: 'GeneralTraffic',
    component: GeneralTraffic
  },
  {
    path: '/stop-sign-ticket',
    name: 'StopSignTicket',
    component: StopSignTicket
  },
  {
    path: '/red-light-ticket',
    name: 'RedLightTicket',
    component: RedLightTicket
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
