import { createRouter, createWebHistory } from 'vue-router'

import Externals from '../Externals.vue'
import Auth from '../Auth.vue'
import Overview from '../Overview.vue'

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
import Cvc from '../views/Cvc.vue'
import ContactUs from '../views/ContactUs.vue'
import CourtHouses from '../views/CourtHouses.vue'
import County from '../views/County.vue'
import MediaBlog from '../views/MediaBlog.vue'
import MediaItem from '../views/MediaItem.vue'

import AuthPage from '../auth-pages/AuthPage.vue'

const routes = [
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/',
    component: Externals,
    children: [
      {
        path: 'home',
        alias: '',
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
      },
      {
        path: '/cvc',
        name: 'Cvc',
        component: Cvc
      },
      {
        path: '/contact-us',
        name: 'ContactUs',
        component: ContactUs
      },
      {
        path: '/court-house',
        name: 'CourtHouses',
        component: CourtHouses
      },
      {
        path: '/county',
        name: 'County',
        component: County
      },
      {
        path: '/media',
        name: 'MediaBlog',
        component: MediaBlog
      },
      {
        path: '/media-item',
        name: 'MediaItem',
        component: MediaItem
      }
    ]
  },
  {
    path: '/auth-page',
    component: Auth,
    children: [
      {
        path: '/login',
        alias: '',
        name: 'AuthPage',
        component: AuthPage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
