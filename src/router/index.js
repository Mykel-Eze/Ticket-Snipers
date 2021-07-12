import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import SpeedingTicket from '../views/SpeedingTicket.vue'
import RedLightCamera from '../views/RedLightCamera.vue'
import GeneralTraffic from '../views/GeneralTraffic.vue'
import StopSignTicket from '../views/StopSignTicket.vue'
import RedLightTicket from '../views/RedLightTicket.vue'
import Pricing from '../views/Pricing.vue'
import HowItWorks from '../views/HowItWorks.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
