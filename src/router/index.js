import { createRouter, createWebHistory } from 'vue-router'
// import Home from '../views/Home.vue'
import SpeedingTicket from '../views/SpeedingTicket.vue'
import RedLightCamera from '../views/RedLightCamera.vue'
import GeneralTraffic from '../views/GeneralTraffic.vue'
import StopSignTicket from '../views/StopSignTicket.vue'
import RedLightTicket from '../views/RedLightTicket.vue'

const routes = [
  {
    path: '/',
    name: 'SpeedingTicket',
    component: SpeedingTicket
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
